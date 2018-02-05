<?php
	require_once("action/AjaxCharacterAction.php");

	$action = new AjaxCharacterAction();
	$action->execute();

	echo json_encode($action->result);
