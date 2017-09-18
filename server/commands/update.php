<?php

class Page extends ParentCommand {

  public function prepare() {

    $this->table('items')
      ->set('model', null)
      ->set('capacity', null)
      ->set('color', null)
      ->update();

    $items = $this->table('items')
      //->where('model', null)
      //->where('id', 281)
      //->limit(500)
      ->get();

    foreach ($items as $item) {
      $model = $this->package('format')->getModelFromTitle($item['title']);
      $capacity = $this->package('format')->getCapacityFromTitle($item['title']);
      $color = $this->package('format')->getColorFromTitle($item['title']);

      echo "$model --> ".$item['title']."\n";

      $model = $this->info('tags')->get($model);

      if ($model) {
        $this->table('items')
          ->set('model', $model['slug'])
          ->set('capacity', $capacity)
          ->update($item);
        }
    }

    return new Stop();

  }

}
