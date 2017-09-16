<?php

class TableItems extends Table {

	public $champ = [
		'reference' => ['bigint', 'unsigned'],
		'title' => ['varchar', 255],
		'price' => ['int', 'unsigned'],
		'href' => ['varchar', 255],
		'created' => ['datetime'],
		'disabled' => ['datetime', null, null, true],
	];

	public $unique = [
		'reference',
	];

}
