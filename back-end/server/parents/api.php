<?php

abstract class ParentApi extends EcranPlat {

	protected function preparePrincipal() {

		Translation::setNativeLanguage('fr');
		Translation::setAvailableLanguage('fr');
		Translation::setLanguage('fr');

		return $this->prepare();

	}

	protected function affichePrincipal() {
	}

	protected function postAffiche() {
	}

}
