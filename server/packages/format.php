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

		$title = strtolower($title);
		$pattern = 'iphone\s*(\d|se|x)\s*(s|c)?\s*(plus|\+)?';
		$matches = [];

		preg_match("/$pattern/i", $title, $matches);
		//print_r($matches);

		switch (count($matches)) {
			case 2:
				return 'iphone-'.$matches[1];
			case 3:
				return 'iphone-'.$matches[1].$matches[2];
			case 4:
				return 'iphone-'.$matches[1].$matches[2].'-plus';
		}

		return 'iphone-'.$matches[1];

	}

	public function getCapacityFromTitle($title) {

		$pattern = '(16|32|64|128|256)\s*(g)';
		$matches = [];

		preg_match("/$pattern/i", $title, $matches);
		//print_r($matches);

		if (count($matches) > 1) {
			return $matches[1];
		}

		return null;

	}

  protected function getReferenceFromHref($href) {
    $out = [];
    preg_match('/\/([0-9]+)\.htm/', $href, $out);
    return $out[1];
  }

}
