<?php
	class Funds_Account_Admin extends CI_MODEL {

		function __construct() {
        	parent::__construct();
        	$this->load->database();
        }

        // 管理员登录验证，验证成功则返回true， 否则返回false
        public function check_admin($admin_name, $password) {
        	$result = $this->db->get_where('admin', array(
        		'name' 		=> $admin_name,
        		'password' 	=> $password,
        		));

        	if ($result->num_rows() == 0) {
        		return false;
        	}
        	return true;
        }

		// 管理员确认开户
		// (id, true/false)
		/*
		public function handle_register($id, $result) {
			$result = $result ? 0 : 2;
			$sql = "UPDATE funds_account SET create_state='" . $result . "' WHERE id='" . $id . "'";
			$this->db->query($sql);
		}*/

		// 处理挂失
		// (id, true/false, "info")
		public function handle_lost_application($id, $result, $reply) {
			$result = $result ? 1 : 2;
			$sql = "UPDATE lost_application SET state=" . $result . " , reply='" . $reply . 
				"' WHERE funds_account='" . $id . "' AND state=0";
			echo $sql;
			$this->db->query($sql);
		}

		// 处理销户
		// (id, true/false, "info")
		public function handle_cancel_application($id, $result, $reply) {
			$result = $result ? 1 : 2;
			$sql = "UPDATE cancel_application SET state=" . $result . " , reply='" . $reply . 
				"' WHERE funds_account='" . $id . "' AND state=0";
			echo $sql;
			$this->db->query($sql);	
		}

		// 列出等待审核的开户信息
		// 返回数组，每行一条
		
		public function get_register_list() {
			$sql = "SELECT * FROM funds_account WHERE state=0";
			$query = $this->db->query($sql);
			return $query->result_array();
		}

		// 列出等待审核的挂失信息
		// 返回数组，每行一条
		public function get_lost_list() {
			$sql = "SELECT * FROM lost_application WHERE state=0";
			$query = $this->db->query($sql);
			return $query->result_array();
		}

		// 列出等待审核的销户信息
		// 返回数组，每行一条
		public function get_cancel_list() {
			$sql = "SELECT * FROM cancel_application WHERE state=0";
			$query = $this->db->query($sql);
			return $query->result_array();
		}
	}
?>