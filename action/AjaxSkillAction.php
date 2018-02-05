<?php
	require_once("action/CommonAction.php");

	class AjaxSkillAction extends CommonAction {
		public $result = "ERR_100";
		public $answer;
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);			
		}
	
		protected function executeAction() {

				$data = [];
				$data["key"] = $_SESSION["key"];
				$data["skill-name"] = $_POST["skillname"];

				$answer = $this->callAPI("action", $data);
				$this->result = $answer;
		}
	}


	
	
	
	
	
	