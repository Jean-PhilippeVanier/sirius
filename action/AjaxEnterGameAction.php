<?php
	require_once("action/CommonAction.php");

	class AjaxEnterGameAction extends CommonAction {
		public $result = "ERR_100";
		public $answer;
		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);			
		}
	
		protected function executeAction() {

				$data = [];
				$data["key"] = $_SESSION["key"];
                $data["id"] = $_POST["id"];
				$answer = $this->callAPI("enter", $data);
				$this->result = $answer;
                

		}
	}


	
	
	
	
	
	