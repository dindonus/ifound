<?php

class TableItems extends Table {

	public $champ = [
		'player' => ['table', 'players'],
		'mail' => ['varchar', 50, null, true],
		'confirmed' => ['bool', null, false],
		'sound' => ['bool', null, true],
		'music' => ['bool', null, true],
		'language' => ['char', 2],
		'age' => ['smallint', 'unsigned'],
		'source' => ['varchar', 20, null, true],
		'created' => ['datetime'],
		'actived' => ['date', null, null, true],
	];

	public $unique = [
		'player',
		'mail',
	];

}
