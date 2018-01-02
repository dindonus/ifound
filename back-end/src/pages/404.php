<?php

class Page extends ParentApi {

	protected $description = 'Ressource not found';

	public function run() {
			return ['404 error'];
	}

}
