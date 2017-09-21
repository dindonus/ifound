<?php

class Page extends ParentApi {

	protected $description = 'Statistics summary';

	public function prepare() {

		$stats = $this->table('items')
			->select(['slug' => 'model', 'availables' => 'COUNT(*)', 'price' => 'AVG(price)'])
			->group('model')
			->order('price', 'desc')
			->get();

		foreach ($stats as &$stat) {
			$stat['capacities'] = $this->getCapacities($stat['slug'], $stat['availables']);
		}

		return $stats;

	}

	protected function getCapacities($model, $availables) {

		$requiredByCapacity = ceil($availables / 20);

		$capacities = $this->table('items')
			->select(['capacity', 'availables' => 'COUNT(*)', 'price' => 'AVG(price)'])
			->where('model', $model)
			->where('capacity', '!=', null)
			->group('capacity')
			->order('capacity', 'asc')
			->get();

		return array_values(array_filter($capacities, function($stat) use ($requiredByCapacity) {
			return $stat['availables'] > $requiredByCapacity;
		}));

	}

}
