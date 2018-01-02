<?php

abstract class ParentApi extends EcranPlat {

	protected $description = 'Default API description';

	protected function parentRun() {

		Translation::setNativeLanguage('fr');
		Translation::setAvailableLanguage('fr');
		Translation::setLanguage('fr');

		$data = $this->run();

		header('Access-Control-Allow-Origin: *');

		return new Json([
			'version' => '1.0.0',
			'description' => $this->description,
			'payload' => $data,
		]);

	}

}
