<?php

class Page extends ParentApi {

	protected $description = 'All offers by model';

	public function run() {

		sleep(1);

		list($model) = explode('/', POUSSIERE);
		$location = trim((string) autoGet('location', ''));

		$model = $this->info('tags')->get($model);

		if (!$model) {
			return 'Invalid parameters';
		}

		$query = $this->table('items')
			->select('title', 'price', 'capacity', 'color', 'location', 'href', 'picture', 'published')
			->where('model', $model['slug'])
			->where('published', '>', now('-'.config('app.offers.duration')))
			->where('capacity', '!=', null)
			->where('picture', '!=', null)
			->order('published', 'desc')
			->limit(50);

		if ($location) {
			$location = addslashes($location);
			$query = $query->where("`location` LIKE '%$location%'");
		}

		$items = $query->get();

		foreach ($items as &$item) {
			$item['published'] = [
				'datetime' => $item['published'],
				'localized' => dateTexte($item['published']),
			];
		}

		return $items;

	}

}
