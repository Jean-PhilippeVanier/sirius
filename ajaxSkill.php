<?php
	require_once("action/AjaxSkillAction.php");

	$action = new AjaxSkillAction();
	$action->execute();

	echo json_encode($action->result);
