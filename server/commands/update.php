<?php

class Page extends ParentCommand {

  public function prepare() {

    $items = $this->table('items')
      ->where('model', null)
      ->limit(500)
      ->get();

    foreach ($items as $item) {
      $model = $this->package('format')->getModelFromTitle($item['title']);
      echo "$model --> ".$item['title']."\n";
    }

    return new Stop();

  }

}
