<?php

abstract class ParentApi extends EcranPlat {

	protected $description = 'Default API description';

	protected function preparePrincipal() {

		Translation::setNativeLanguage('fr');
		Translation::setAvailableLanguage('fr');
		Translation::setLanguage('fr');

		$data = $this->prepare();

		header('Access-Control-Allow-Origin: *');

		return new Json([
			'version' => '1.0.0',
			'description' => $this->description,
			'payload' => $data,
		]);

	}

	protected function affichePrincipal() {
	}

	protected function postAffiche() {
	}

}
