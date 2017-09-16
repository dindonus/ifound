<?php

class Page extends ParentMain {

	public $titre = "Erreur 404";

	public function prepare() {

		if (XHR === true) {

			return new Alert("xhr request has been lost :(");

		}

		if (CLI === true) {

			echo "Can't find this page (404).\n";

			return new Stop();

		}

		return new Redirection();

	}

	public function affiche() {

		echo '
		<div class="centred text-center">

			<big>404</big>

		</div>';

	}

}
