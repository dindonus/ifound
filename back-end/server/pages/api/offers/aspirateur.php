<?php

class Page extends ParentApi {

	protected $description = 'All offers by model';

	public function prepare() {

		list($model) = explode('/', POUSSIERE);

		$model = $this->info('tags')->get($model);

		if (!$model) {
			return 'Invalid parameters';
		}

		$items = $this->table('items')
			->select('title', 'price', 'capacity', 'color', 'location', 'href', 'picture', 'published')
			->where('model', $model['slug'])
			->where('published', '>', now('-'.config('app.offers.duration')))
			->where('picture', '!=', null)
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
