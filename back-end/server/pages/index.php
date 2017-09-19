<?php

class Page extends ParentApi {

	public function prepare() {

		$stats = $this->table('items')
			->select(['model', 'total' => 'COUNT(*)', 'price' => 'AVG(price)'])
			->group('model')
			->order('total', 'desc')
			->get();

		return new Json([
			'location' => 'index',
			'data' => $stats,
		]);

	}

}
