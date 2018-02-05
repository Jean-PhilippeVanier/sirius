<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<?php
	require_once("action/characterAction.php");

	$action = new characterAction();

	$action->execute();

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" class ="container2" xml:lang="fr" lang="fr">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Sirius</title>
		<link href="css/global.css" rel="stylesheet" type="text/css" media="screen" />	
		<link href="css/jquery.lightbox-0.5.css" rel="stylesheet" type="text/css" media="screen" />	 
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.lightbox-0.5.min.js"></script> 
		<script type="text/javascript" src="js/javascriptCharacter.js"></script> 
	</head>
	<body class = "container2">
		<div class = "container">
			<header>
				<ul class = "ul-character">
					<li class = "li-character"><a href = "index.php">Index</a></li>
					<li class = "li-character"><a href = "character.php">Character</a></li>
					<li class = "li-character"><a href = "lobby.php">Games</a></li>
						<?php
							if ($action->isLoggedIn()) {
								?>
								<li class = "li-character"><a href="?logout=true">Logout</a></li>
								<?php		
							}
						?>
					<div class = "clear"</div>
				</ul>
			</header>
			<div class = "statistiques">
				<h3> Statistics </h3>
	
			<div class= "character">
				<h3>Character</h3>
				<div>
					<div id="dialog-message2" title="DÉFAITE !" style = "display:none">
  					<p>
						<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>
							Empty key.
  					</p>
					</div>	
					<div class = "stats">
						<div class = "label">Name : </div>
						<div class = "value" id="username"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">Type : </div>
						<div class = "value" id="type"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">Level : </div>
						<div class = "value" id="niveau"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">Experience : </div>
						<div class = "value" id="xp"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">HP : </div>
						<div class = "value" id="hp"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">MP : </div>
						<div class = "value" id="mp"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">Victories : </div>
						<div class = "value" id="victoires"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">Dodge chance : </div>
						<div class = "value" id="feinte"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">Damage reduction : </div>
						<div class = "value" id="reduction"></div>
						<div class = "clear"></div>
					</div>
					<div class = "stats">
						<div class = "label">Last game : </div>
						<div class = "value" id="last"></div>
						<div class = "clear"></div>
					</div>
					
				</div>
			</div>
			</div>

	</body>






<?php
	require_once("partial/footer.php");