<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html class = "container4" xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<?php
	require_once("action/LobbyAction.php");

	$action = new LobbyAction();

	$action->execute();
	
?>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>

	<script src="js/javascriptGame.js"></script>
	<script src="js/Boss.js"></script>
	<script src="js/Player.js"></script>
	<script src="js/FireBall.js"></script>
	<script src="js/Animation.js"></script>
	<script src="js/Explosion.js"></script>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Sirius</title>
		<link href="css/global.css" rel="stylesheet" type="text/css" media="screen" />
		<link rel="stylesheet" href="css/jquery-ui.css">	
	</head>
	 <body>
		<div class = "containerINGame">
			<header>
				<ul class = "ul-character">
					<li class = "li-character"><a href = "index.php">Accueil</a></li>
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
			<canvas id="canvas" width="1136" height="640">
				nope.
			</canvas>
			<div class = "containerSkills" id = "containerSkills">
			<div id="dialog-message" title="VICTORY !" style = "display:none">
  				<p>
					<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
						Cthulhu's forces  have been defeated!
  				</p>
			</div>
			<div id="dialog-message2" title="DEFEAT !" style = "display:none">
  				<p>
					<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
						Cthulhu's influence grows..
  				</p>
			</div>
			<div id="dialog-message3" title="User not found !" style = "display:none">
  				<p>
					<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
						User not found, please login
  				</p>
			</div>	
			<div id="dialog-message4" title="Not enough mana !" style = "display:none">
  				<p>
					<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
						Not enough mana for this ability
  				</p>
			</div>				
				<div class = "bossGame">
					<div class = "bossName"></div>
					<div class = "bossHP"></div>
				</div>
				<div class = "skill" id = "stats1">
					<div class = "name"></div>
					<div class = "heal_target"></div>
					<div class = "level"></div>
					<div class = "cost"></div>
					<div class = "dmg"></div>
					<div class = "heal"></div>
				</div>
				<div class = "skill" id = "stats2">
					<div class = "name" ></div>
					<div class = "heal_target"></div>
					<div class = "level"></div>
					<div class = "cost"></div>
					<div class = "dmg"></div>
					<div class = "heal"></div>
				</div>
				<div class = "skill" id = "stats3">
					<div class = "name"></div>
					<div class = "heal_target"></div>
					<div class = "level"></div>
					<div class = "cost"></div>
					<div class = "dmg"></div>
					<div class = "heal"></div>
				</div>
					<ul class = "listeJoueur" >
						<li>
							<div class="playerGame" id = "player1">
								<div class = "playerName"></div>
								<div class = "playerHP"></div>
								<div class = "playerMP"></div>
							</div>
						</li>
						<li>
							<div class="playerGame" id = "player2">
								<div class = "playerName"></div>
								<div class = "playerHP"></div>
								<div class = "playerMP"></div>
							</div>
						</li>
						<li>
							<div class="playerGame" id = "player3">
								<div class = "playerName"></div>
								<div class = "playerHP"></div>
								<div class = "playerMP"></div>
							</div>
						</li>
						<li>
							<div class="playerGame" id = "player4">
								<div class = "playerName"></div>
								<div class = "playerHP"></div>
								<div class = "playerMP"></div>
							</div>	
						</li>																				
					</ul>
				</script>
			</div>
	</body>





<?php
	require_once("partial/footer.php");