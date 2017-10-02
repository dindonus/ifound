<?php

class Page extends ParentApi {

	protected $description = 'All offers by model and capacity';

	public function prepare() {

		list($model, $capacity) = explode('/', POUSSIERE);

		$model = $this->info('tags')->get($model);
		$capacity = (int) $capacity;

		if (!$model or !in_array($capacity, config('app.capacities'))) {
			return 'Invalid parameters';
		}

		$items = $this->table('items')
			->select('title', 'price', 'color', 'location', 'href', 'picture', 'published')
			->where('model', $model['slug'])
			->where('capacity', $capacity)
			->where('published', '>', now('-'.config('app.offers.duration')))
			->order('published', 'desc')
			->limit(50)
			->get();

		foreach ($items as &$item) {
			$item['published'] = [
				'datetime' => $item['published'],
				'localized' => dateTexte($item['published']),
			];
		}

		return $items;

	}

}
