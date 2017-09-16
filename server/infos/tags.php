<?php

class InfoTags extends Information {

	protected function charge() {

		$this->igInfo = [

			// Models
			1 => [
				'slug' => 'iphone-4',
				'name' => "iPhone 4",
			],
			2 => [
				'slug' => 'iphone-4s',
				'name' => "iPhone 4S",
			],
			3 => [
				'slug' => 'iphone-5',
				'name' => "iPhone 5",
			],
			4 => [
				'slug' => 'iphone-5s',
				'name' => "iPhone 5S",
			],
			5 => [
				'slug' => 'iphone-6',
				'name' => "iPhone 6",
			],
			6 => [
				'slug' => 'iphone-6-plus',
				'name' => "iPhone 6 Plus",
			],
			7 => [
				'slug' => 'iphone-se',
				'name' => "iPhone SE",
			],
			8 => [
				'slug' => 'iphone-6s',
				'name' => "iPhone 6S",
			],
			9 => [
				'slug' => 'iphone-6s-plus',
				'name' => "iPhone 6S Plus",
			],
			10 => [
				'slug' => 'iphone-7',
				'name' => "iPhone 7",
			],
			11 => [
				'slug' => 'iphone-7-plus',
				'name' => "iPhone 7 Plus",
			],
			12 => [
				'slug' => 'iphone-8',
				'name' => "iPhone 8",
			],
			13 => [
				'slug' => 'iphone-8-plus',
				'name' => "iPhone 8 Plus",
			],
			14 => [
				'slug' => 'iphone-x',
				'name' => "iPhone X",
			],

			// Capacity
			100 => [
				'slug' => '16-go',
				'name' => '16 Go',
			],
			101 => [
				'slug' => '32-go',
				'name' => '32 Go',
			],
			102 => [
				'slug' => '64-go',
				'name' => '64 Go',
			],
			103 => [
				'slug' => '128-go',
				'name' => '128 Go',
			],
			104 => [
				'slug' => '256-go',
				'name' => '256 Go',
			],

			// Finitions
			200 => [
				'slug' => 'white',
				'name' => 'Blanc',
			],
			201 => [
				'slug' => 'black',
				'name' => 'Noir',
			],
			202 => [
				'slug' => 'black-jais',
				'name' => 'Noir de jais',
			],
			203 => [
				'slug' => 'silver',
				'name' => 'Argent',
			],
			204 => [
				'slug' => 'grey',
				'name' => 'Gris sidéral',
			],
			205 => [
				'slug' => 'gold',
				'name' => 'Or',
			],
			206 => [
				'slug' => 'gold-pink',
				'name' => 'Or rose',
			],
			207 => [
				'slug' => 'red',
				'name' => 'Red Edition',
			],

		];

	}

	protected function complete($tag) {
		return $tag;
	}

}
