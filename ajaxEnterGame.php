<?php
	require_once("action/AjaxEnterGameAction.php");

	$action = new AjaxEnterGameAction();
	$action->execute();

	echo json_encode($action->result);
