<?php

class PackageFilter extends Package {

	public function items($items) {

		$matchs = [];

		foreach ($items as $item) {
			if ($this->doesMatch($item)) {
				$matchs[] = $item;
			}
		}

		return $matchs;

	}

	protected function doesMatch($item) {

		if ($item['price'] < 100 || $item['price'] > 1500) {
			return false;
		}

		return preg_match('/iphone ([0-9]+|se|x)/i', $item['title']);

		$forbiden = ['perche', 'chargeur', 'coque'];

		if ($this->contains($item['title'], $forbiden)) {
			return false;
		}

		return true;

	}

	protected function contains($string, $array) {

		foreach ($array as $value) {
			if (stripos($string, $value) !== false) {
				return true;
			}
		}

		return false;

	}

}
