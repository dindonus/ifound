<?php

class InfoBreeds extends Information {

	protected function charge() {

		$this->igInfo = [
			1 => [
				'slug' => 'bananos',
				'name' => ___(90, "Bananos"),
				'speed' => 0.9,
				'stamina' => 1,
				'acceleration' => 0.8,
				'distance' => 0.9,
				'field' => 'beach',
				'power' => 'drop',
				'trap' => ['banana'],
				'description' => ___(91, "Laisse trainer ses bananes partout."),
				'skin' => 'angora/ywaailxs',
				'rarity' => 0,
			],
		];

	}

	protected function complete($bunny) {
		return $bunny;
	}

}
