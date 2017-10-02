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
				$model['capacities'] = $this->getCapacities($stat['slug'], $stat['availables']);
				$model['stats'] = [
					'availables' => $stat['availables'],
					'price' => $stat['price'],
				];
				$models[] = $model;
			}
		}

		return $models;

	}

	protected function getCapacities($model, $availables) {

		$requiredByCapacity = ceil($availables / 20);

		$capacities = $this->table('items')
			->select([
				'value' => 'capacity',
				'availables' => 'COUNT(*)',
				'price' => 'AVG(price)'
			])
			->where('model', $model)
			->where('capacity', '!=', null)
			->where('picture', '!=', null)
			->where('published', '>', now('-'.config('app.offers.duration')))
			->group('capacity')
			->order('capacity', 'asc')
			->get();

		return array_values(array_filter($capacities, function($stat) use ($requiredByCapacity) {
			return $stat['availables'] > $requiredByCapacity;
		}));

	}

}
