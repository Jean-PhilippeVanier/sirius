<?php
	require_once("action/CommonAction.php");

	class AjaxGameAction extends CommonAction {
		public $result = "ERR_100";
		public $answer;
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);			
		}
	
		protected function executeAction() {

				$data = [];
				$data["key"] = $_SESSION["key"];

				$answer = $this->callAPI("state", $data);
				$this->result = $answer;
		}
	}


	
	
	
	
	
	