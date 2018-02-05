<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html class = "container3" xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<?php
	require_once("action/LobbyAction.php");

	$action = new LobbyAction();

	$action->execute();
	
?>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.lightbox-0.5.min.js"></script>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Sirius</title>
		<link href="css/global.css" rel="stylesheet" type="text/css" media="screen" />	
		<link href="css/jquery.lightbox-0.5.css" rel="stylesheet" type="text/css" media="screen" />	 
		<script type="text/javascript" src="js/javascriptLobby.js"></script> 
		<script type="text/javascript" src="js/javascriptCharacter.js"></script> 
	</head>
	 <body>
		<div class = "container">
			<header>
				<ul class = "ul-character">
					<li class = "li-character"><a href = "index.php">Accueil</a></li>
					<li class = "li-character"><a href = "character.php">Personnage</a></li>
					<li class = "li-character"><a href = "lobby.php">Parties</a></li>
						<?php
							if ($action->isLoggedIn()) {
								?>
								<li class = "li-character"><a href="?logout=true">Logout</a></li>
								<?php		
							}
						?>
					<div class = "clear"></div>
				</ul>
			</header>
			<div class = "charcontainer">
				<div class = "charstats">
					<div id="dialog-message3" title="User not found !" style = "display:none">
  						<p>
							<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
								User not found, please login
  						</p>
					</div>	
						<div class = "stats">
							<div class = "label2">Nom : </div>
							<div class = "value" id="username"></div>
							<div class = "clear"></div>
						</div>
						<div class = "stats">
							<div class = "label2">hp : </div>
							<div class = "value" id="hp"></div>
							<div class = "clear"></div>
						</div>
						<div class = "stats">
							<div class = "label2">mp : </div>
							<div class = "value" id="mp"></div>
							<div class = "clear"></div>
						</div>
						<div class = "stats">
							<div class = "label2">niveau : </div>
							<div class = "value" id="niveau"></div>
							<div class = "clear"></div>
						</div>
						<div class = "stats">
							<div class = "label2">experience : </div>
							<div class = "value" id="xp"></div>
							<div class = "clear"></div>
						</div>
				</div>
			</div>
				<script type="text/x-template" id="template">
					<div class="games">
						<div class = "name"></div>
						<div class = "level"></div>
						<div class = "players"></div>
						<div class = "bosshp"></div>
						<div class = "bosstype"></div>
					</div>
				</script>
				<div class = "gamecontainer">
					<h3> Parties </h3>
					<div id="container"></div>
				</div>

	</body>






<?php
	require_once("partial/footer.php");