<?php

class PackageCasper extends Package {

	public function getItems($search, $page) {

		$base = "https://www.leboncoin.fr/telephonie/offres/ile_de_france/occasions/";
		$url = "$base?o=$page&q=$search";
		$bin = file_exists('/usr/local/bin/phantomjs') ? '/usr/local/bin' : '/usr/bin';
		$commands = [
			"export PHANTOMJS_EXECUTABLE='$bin/phantomjs'",
			"$bin/casperjs ".PATH."casper/index.js --url=$url"
		];
		$output = [];
		exec(implode(' && ', $commands), $output);

		$items = implode("\n", $output);
		$items = json_decode($items, true);

		$formated = [];

		foreach ($items as $item) {
			$formated[] = $this->package('format')->casperToItem($item);
		}

		return $formated;

	}

}
