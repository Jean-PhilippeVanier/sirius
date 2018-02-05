<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<?php
	require_once("action/IndexAction.php");

	$action = new IndexAction();

	$action->execute();

	require_once("Partial/header.php");
?>
	<script type="text/javascript" src="js/javascriptIndex.js"></script> 
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<div class="fullscreen-bg">
   		<video loop muted autoplay class="fullscreen-bg__video">
			<source src="images/background1.mp4" type="video/mp4">
		</video>
	</div>
	<div class ="login">
		<form action="index.php" method="post">
			<div class="form-label">
				<label for="username">Nom d'usager : </label>
			</div>
			<div class="form-input">
				<input type="text" name="nom" id="nom" />
			</div>
			<div class="form-separator"></div>

			<div class="form-label">
				<label for="password">Mot de passe : </label>
			</div>
			<div class="form-input">
				<input type="password" name="password" id="password" />
			</div>
			<div class="form-input">
				<button type="submit">Connexion</button>
			</div>
		</form>
	</div>
<?php
	require_once("partial/footer.php");