<?php

class PackageDate extends Package {

  public function fromHuman($text) {

    $explode = explode(',', $text);
    $time = trim($explode[1]).':00';

    if (stripos($text, "Aujourd'hui") !== false) {
      return date('Y-m-d')." $time";
    }

    if (stripos($text, "Hier") !== false) {
      return date('Y-m-d', time() - 24 * 3600)." $time";
    }

    return null;

  }

}
