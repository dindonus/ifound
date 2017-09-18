<?php

class InfoTags extends Information {

	protected function charge() {

		$this->igInfo = [

			// Models
			1 => [
				'slug' => 'iphone-4',
				'name' => "iPhone 4",
				'type' => 'model',
				'matches' => ['4'],
			],
			2 => [
				'slug' => 'iphone-4s',
				'name' => "iPhone 4s",
				'type' => 'model',
				'matches' => ['4s', '4 s'],
			],
			3 => [
				'slug' => 'iphone-5',
				'name' => "iPhone 5",
				'type' => 'model',
				'matches' => ['5'],
			],
			4 => [
				'slug' => 'iphone-5s',
				'name' => "iPhone 5s",
				'type' => 'model',
				'matches' => ['5s', '5 s'],
			],
			5 => [
				'slug' => 'iphone-5c',
				'name' => "iPhone 5c",
				'type' => 'model',
				'matches' => ['5c', '5 c'],
			],
			6 => [
				'slug' => 'iphone-6',
				'name' => "iPhone 6",
				'type' => 'model',
				'matches' => ['6'],
			],
			7 => [
				'slug' => 'iphone-6-plus',
				'name' => "iPhone 6 Plus",
				'type' => 'model',
				'matches' => ['6 plus', '6plus'],
			],
			8 => [
				'slug' => 'iphone-se',
				'name' => "iPhone SE",
				'type' => 'model',
				'matches' => ['se'],
			],
			9 => [
				'slug' => 'iphone-6s',
				'name' => "iPhone 6s",
				'type' => 'model',
				'matches' => ['6s', '6 s'],
			],
			10 => [
				'slug' => 'iphone-6s-plus',
				'name' => "iPhone 6s Plus",
				'type' => 'model',
				'matches' => ['6s plus', '6 s plus'],
			],
			11 => [
				'slug' => 'iphone-7',
				'name' => "iPhone 7",
				'type' => 'model',
				'matches' => ['7'],
			],
			12 => [
				'slug' => 'iphone-7-plus',
				'name' => "iPhone 7 Plus",
				'type' => 'model',
				'matches' => ['7 plus', '7plus'],
			],
			13 => [
				'slug' => 'iphone-8',
				'name' => "iPhone 8",
				'type' => 'model',
				'matches' => ['8'],
			],
			14 => [
				'slug' => 'iphone-8-plus',
				'name' => "iPhone 8 Plus",
				'type' => 'model',
				'matches' => ['8 plus', '8plus'],
			],
			15 => [
				'slug' => 'iphone-x',
				'name' => "iPhone X",
				'type' => 'model',
				'matches' => ['x', '10'],
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

			// Quality
			300 => [
				'slug' => 'blister',
				'name' => 'Blister',
			],
			301 => [
				'slug' => 'new',
				'name' => 'Neuf',
			],
			302 => [
				'slug' => 'excellent',
				'name' => 'Excellent état',
			],

		];

	}

	protected function complete($tag) {
		return $tag;
	}

}
