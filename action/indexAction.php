<?php

	require_once("action/CommonAction.php");

	class IndexAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			$errorEmptyUser = "Please enter your username";
			$errorNotFound = "Cannot find user ";
			$errorCharNotCreated = "Please create a character";
			$errorBanned = "This user is banned";
			$errorTooManyCo = "Too many connections, banned";
			$errorPassword = "Invalid password";
			$loginError = "";
			if(!isset($_SESSION["key"])){
				$_SESSION["key"] = "temp";
			}
			if(isset($_POST["nom"])) {
				$data = [];
				$data["username"] = $_POST["nom"] ;
				$data["pwd"] = $_POST["password"];

				$_SESSION["key"] = $this->callAPI("signin", $data);
				
				if(strlen($_SESSION["key"]) === 40){
					$_SESSION["visibility"] = 1;
					header('location:character.php');
				}
			}
			if($_SESSION["key"] == "EMPTY_USERNAME"){
				echo "<div class='error'> $errorEmptyUser </div>";
			}
			else
			if($_SESSION["key"] == "USER_NOT_FOUND" && isset($data["pwd"])){
				echo "<div class='error'> $errorNotFound </div>";
			}
			else
			if($_SESSION["key"] == "CHARACTER_NOT_CREATED"){
				echo "<div class='error'> $errorCharNotCreated </div>";
			}
			else
			if($_SESSION["key"] == "USER_IS_BANNED"){
				echo "<div class='error'> $errorBanned </div>";
			}
			else
			if($_SESSION["key"] == "TOO_MANY_CONNECTIONS_BAN"){
				echo "<div class='error'> $errorTooManyCo </div>";
			}
			else
			if($_SESSION["key"] == "INVALID_USERNAME_PASSWORD"){
				echo "<div class='error'> $errorPassword </div>";
			}
		}

}
