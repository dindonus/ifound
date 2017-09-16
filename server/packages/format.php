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

  protected function getReferenceFromHref($href) {
    $out = [];
    preg_match('/\/([0-9]+)\.htm/', $href, $out);
    return $out[1];
  }

}
