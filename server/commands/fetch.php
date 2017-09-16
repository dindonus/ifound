<?php

class Page extends ParentCommand {

  public function prepare() {

    $base = "https://www.leboncoin.fr/telephonie/offres/ile_de_france/";
    $url = "$base?o=1&q=iphone%207";
    $output = [];
    exec("casperjs casper/index.js --url=$url", $output);

    $items = implode("\n", $output);
    $items = json_decode($items, true);

    print_r($items);

    return new Stop();

  }

}
