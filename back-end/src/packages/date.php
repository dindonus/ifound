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

    $pattern = '(\d+)\s([a-z]+),\s(\d+):(\d+)';
    $matches = [];

    preg_match("/$pattern/i", $text, $matches);

    if (!$matches) {
      return null;
    }

    list($all, $day, $month, $hour, $minute) = $matches;

    $month = [
      'sept' => '09',
    ][$month];

    return date('Y')."-$month-$day $hour:$minute:00";

  }

}
