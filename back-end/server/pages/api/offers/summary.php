<?php

class Page extends ParentApi {

	protected $description = 'Statistics summary';

	public function prepare() {

		$stats = $this->table('items')
			->select(['slug' => 'model', 'availables' => 'COUNT(*)', 'price' => 'AVG(price)'])
			->where('published', '>', now('-'.config('app.offers.duration')))
			->where('picture', '!=', null)
			->where('capacity', '!=', null)
			->group('model')
			->order('price', 'desc')
			->get();

		$models = [];

		foreach ($stats as &$stat) {
			$model = $this->info('tags')->get($stat['slug']);
			if ($model) {
				unset($model['id']);
				unset($model['type']);
				$model['stats'] = [
					'availables' => $stat['availables'],
					'price' => $stat['price'],
				];
				$models[] = $model;
			}
		}

		return $models;

	}

}
