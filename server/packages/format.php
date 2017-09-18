<?php

class PackageFormat extends Package {

	public function casperToItem($item) {

		$date = $this->package('date')->fromHuman($item['date']);

		if (!$date) {
			throw new Exception($item['date']." is not a valid date.");
		}

   	return [
      'reference' => $this->getReferenceFromHref($item['href']),
      'title' => $item['title'],
      'price' => (int) $item['price'],
      'location' => $item['location'],
      'href' => $item['href'],
      'published' => $date,
      'created' => now(),
    ];

  }

	public function getModelFromTitle($title) {
		$title = trim(strtolower($title));
		$explode = explode('iphone', $title);
		$extension = $explode[1];

		$version = $this->getVersionFromExtention($extension);
		$isS = $this->isSFromExtension($extension);
		$isS = $isS ? 's' : '';
		return $version.$isS;

		$models = $this->info('tags')->getBy('type', 'model');
		foreach ($models as $model) {
			foreach ($model['matches'] as $match) {
				if (stripos($title, $match)) {
					return $model['slug'];
				}
			}
		}
		return '??';

	}

	protected function isSFromExtension($extension) {

		$explode = explode(' ', $extension);
		$one = $this->clean($explode, 1);
		$two = $this->clean($explode, 2);

		$one = (mb_substr($one, -1) === 's' and strpos($one, 'plus') === false);
		$two = ($two === 's');

		return ($one or $two);

	}

	protected function clean($array, $index) {
		if (!isset($array[ $index ])) {
			return '';
		}
		return strtolower(trim($array[ $index ]));
	}

	protected function getVersionFromExtention($extension) {

		$explode = explode(' ', $extension);
		$version = $explode[1];

		if (stripos($version, 'se') !== false) {
			return 'se';
		}

		return (int) $version;

	}

  protected function getReferenceFromHref($href) {
    $out = [];
    preg_match('/\/([0-9]+)\.htm/', $href, $out);
    return $out[1];
  }

}
