<?php

use Carbon\Carbon;

class Page extends ParentCommand {

  public function run() {

    for ($page = autoArg('from', 1); $page <= autoArg('to', 10); $page++) {
      echo "Page $page: ";
      $this->scanPage($page);
    }

    return new Done();

  }

  protected function scanPage($page) {

    $items = $this->package('casper')->getItems('iphone', $page);
    echo count($items)." found / ";

    $items = $this->package('filter')->items($items);
    echo count($items)." matchs / ";

    $date = null;
    $inserted = 0;
    foreach ($items as $item) {
      $date = $date === null ? mb_substr($item['published'], 0, -3) : $date;
      $item = $this->package('format')->item($item);
      $inserted += $this->table('items')->option('ignore')->insert($item);
    }
    echo "$inserted inserted @$date\n";

  }

}
