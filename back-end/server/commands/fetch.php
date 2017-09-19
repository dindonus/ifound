<?php

use Carbon\Carbon;

class Page extends ParentCommand {

  public function prepare() {

    for ($page = 1; $page <= 100; $page++) {
      echo "Page $page: ";
      $this->scanPage($page);
    }

    return new Stop();

  }

  protected function scanPage($page) {

    $items = $this->package('casper')->getItems('iphone', $page);
    echo count($items)." found / ";

    $items = $this->package('filter')->items($items);
    echo count($items)." matchs / ";

    $inserted = 0;
    foreach ($items as $item) {
      $inserted += $this->table('items')->option('ignore')->insert($item);
    }
    echo "$inserted inserted\n";

  }

}
