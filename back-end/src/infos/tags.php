<?php

class InfoTags extends Information {

	protected function initialize() {

		$this->data = [

			// Models
			/*
			1 => [
				'slug' => 'iphone-4',
				'name' => "iPhone 4",
				'type' => 'model',
			],
			2 => [
				'slug' => 'iphone-4s',
				'name' => "iPhone 4s",
				'type' => 'model',
			],
			3 => [
				'slug' => 'iphone-5',
				'name' => "iPhone 5",
				'type' => 'model',
			],
			4 => [
				'slug' => 'iphone-5s',
				'name' => "iPhone 5s",
				'type' => 'model',
			],
			5 => [
				'slug' => 'iphone-5c',
				'name' => "iPhone 5c",
				'type' => 'model',
			],
			*/
			6 => [
				'slug' => 'iphone-6',
				'name' => "iPhone 6",
				'type' => 'model',
			],
			7 => [
				'slug' => 'iphone-6-plus',
				'name' => "iPhone 6 Plus",
				'type' => 'model',
			],
			8 => [
				'slug' => 'iphone-se',
				'name' => "iPhone SE",
				'type' => 'model',
			],
			9 => [
				'slug' => 'iphone-6s',
				'name' => "iPhone 6s",
				'type' => 'model',
			],
			10 => [
				'slug' => 'iphone-6s-plus',
				'name' => "iPhone 6s Plus",
				'type' => 'model',
			],
			11 => [
				'slug' => 'iphone-7',
				'name' => "iPhone 7",
				'type' => 'model',
			],
			12 => [
				'slug' => 'iphone-7-plus',
				'name' => "iPhone 7 Plus",
				'type' => 'model',
			],
			13 => [
				'slug' => 'iphone-8',
				'name' => "iPhone 8",
				'type' => 'model',
			],
			14 => [
				'slug' => 'iphone-8-plus',
				'name' => "iPhone 8 Plus",
				'type' => 'model',
			],
			15 => [
				'slug' => 'iphone-x',
				'name' => "iPhone X",
				'type' => 'model',
			],

			// Colors
			200 => [
				'slug' => 'white',
				'name' => 'Blanc',
				'type' => 'color',
				'matches' => ['blanc', 'white'],
			],
			201 => [
				'slug' => 'black-jais',
				'name' => 'Noir de jais',
				'type' => 'color',
				'matches' => ['noir de jais', 'noir brillant'],
			],
			202 => [
				'slug' => 'black',
				'name' => 'Noir',
				'type' => 'color',
				'matches' => ['noir'],
			],
			203 => [
				'slug' => 'silver',
				'name' => 'Argent',
				'type' => 'color',
				'matches' => ['argent', 'silver'],
			],
			204 => [
				'slug' => 'grey',
				'name' => 'Gris sidéral',
				'type' => 'color',
				'matches' => ['gris'],
			],
			205 => [
				'slug' => 'gold-pink',
				'name' => 'Or rose',
				'type' => 'color',
				'matches' => ['rose', 'pink'],
			],
			206 => [
				'slug' => 'gold',
				'name' => 'Or',
				'type' => 'color',
				'matches' => ['or', 'gold'],
			],
			207 => [
				'slug' => 'red',
				'name' => 'Red Edition',
				'type' => 'color',
				'matches' => ['red', 'rouge'],
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
