<?php

class PackageCasper extends Package {

	public function getItems($search, $page) {

		$base = "https://www.leboncoin.fr/telephonie/offres/ile_de_france/";
		$url = "$base?o=$page&q=$search";
		$output = [];
		exec("casperjs ".PATH."casper/index.js --url=$url", $output);

		$items = implode("\n", $output);
		$items = json_decode($items, true);

		$formated = [];

		foreach ($items as $item) {
			$formated[] = $this->package('format')->casperToItem($item);
		}

		return $formated;

	}

}
