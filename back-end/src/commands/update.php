<?php

class Page extends ParentCommand {

  public function run() {

    $this->table('items')
      ->set('model', null)
      ->set('capacity', null)
      ->set('color', null)
      ->update();

    $items = $this->table('items')
      //->where('id', 281)
      //->limit(500)
      ->get();

    foreach ($items as $item) {
      $item = $this->package('format')->item($item);
      $model = $this->info('tags')->get($item['model']);

      echo $item['color']." --> ".$item['title']."\n";

      if ($model) {
        $this->table('items')
          ->set('model', $model['slug'])
          ->set('capacity', $item['capacity'])
          ->set('color', $item['color'])
          ->update($item);
        }
    }

    return new Done();

  }

}
