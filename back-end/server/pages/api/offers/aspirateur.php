<?php

class Page extends ParentApi {

	protected $description = 'All offers by model and capacity';

	public function prepare() {

		list($model, $capacity) = explode('/', POUSSIERE);

		$model = $this->info('tags')->get($model);
		$capacity = (int) $capacity;

		if (!$model or !in_array($capacity, config('specifications.capacities'))) {
			return 'Invalid parameters';
		}

		return $this->table('items')
			->select('title', 'price', 'color', 'location', 'href', 'published')
			->where('model', $model['slug'])
			->where('capacity', $capacity)
			->order('published', 'desc')
			->limit(35)
			->get();

	}

}
