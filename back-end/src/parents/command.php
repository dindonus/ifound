<?php

abstract class ParentCommand extends EcranPlat {

	protected function parentRun() {

		Translation::setNativeLanguage('fr');
		Translation::setAvailableLanguage('fr');
		Translation::setLanguage('fr');

		return $this->run();

	}

}
