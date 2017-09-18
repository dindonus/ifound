<?php

class Page extends ParentCommand {

  public function prepare() {

    $items = $this->table('items')
      //->where('model', null)
      ->limit(500)
      ->get();

    foreach ($items as $item) {
      $model = $this->package('format')->getModelFromTitle($item['title']);
      $capacity = $this->package('format')->getCapacityFromTitle($item['title']);
      echo "$capacity --> ".$item['title']."\n";
      $this->table('items')
        ->set('model', $model)
        ->set('capacity', $capacity)
        ->update($item);
    }

    return new Stop();

  }

}
