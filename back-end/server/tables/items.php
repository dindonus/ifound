<?php

class TableItems extends Table {

	public $champ = [
		'reference' => ['bigint', 'unsigned'],
		'model' => ['varchar', 255, null, true],
		'capacity' => ['smallint', 'unsigned', null, true],
		'color' => ['varchar', 255, null, true],
		'title' => ['varchar', 255],
		'price' => ['int', 'unsigned'],
		'location' => ['varchar', 255],
		'href' => ['varchar', 255],
		'picture' => ['varchar', 255, null, true],
		'published' => ['datetime'],
		'created' => ['datetime'],
		'disabled' => ['datetime', null, null, true],
	];

	public $unique = [
		'reference',
	];

}
