<?php

class Page extends ParentCommand {

  public function prepare() {

    $base = "https://www.leboncoin.fr/telephonie/offres/ile_de_france/";
    $page = 1;
    $url = "$base?o=$page&q=iphone";
    $output = [];
    exec("casperjs casper/index.js --url=$url", $output);

    $items = implode("\n", $output);
    $items = json_decode($items, true);

    echo count($items)." found\n";

    array_map($this->saveItem, $items);

    return new Stop();

  }

  protected function saveItem($item) {

    

  }

}
