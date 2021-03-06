<?php
	class Test extends CI_Controller {

		static $id = 0;

 		function __construct() {
  			parent::__construct();
  			$this->load->model('funds_account');
 		}

 		public function unit_test_test($x) {
 			return $x > 0;
 		}

 		// 测试：开户
 		public function test_new_account() {
 			$acc = array(
 				'stock_account' 	=> 1, 
 				'trade_password' 	=> md5('1234567890'), 
 				'withdraw_password' => md5('4567890123'),
 				'id_card_number' 	=> '123455432112345678',
 				'customer_name' 	=> '陈译',
 				'state' 		=> 0);
 			self::$id = $this->funds_account->new_account($acc);
 			return ($this->funds_account->get_funds_account(array('id' => self::$id)) != false);
 		}

 		// 测试：存钱
 		public function test_save() {
 			return ($this->funds_account->save(self::$id, 'CNY', 200) === true);
 		}

 		// 测试：取钱
 		public function test_withdraw() {
 			$withdraw_password = '4567890123';
 			return ($this->funds_account->withdraw(self::$id,'CNY', 200, $withdraw_password) === true);
 		}

 		// 测试：验证币种
 		public function test_verify_currency() {
 			return $this->funds_account->verify_currency('HKD');
 		}

 		// 测试：修改交易密码
 		public function test_change_trade_pwd() {
 			return $this->funds_account->change_trade_pwd(self::$id, '1234567890', 'new_password') && 
 				$this->funds_account->change_trade_pwd(self::$id, 'new_password', '1234567890');
 		}

 		// 测试：修改取款密码
 		public function test_change_withdraw_pwd() {
 			return $this->funds_account->change_withdraw_pwd(self::$id, '4567890123', 'new_password') && 
 				$this->funds_account->change_withdraw_pwd(self::$id, 'new_password', '4567890123');
 		}

 		// 测试：挂失
 		public function test_report_loss() {
 			return $this->funds_account->report_loss(self::$id);
 		} 		

 		// 测试：销户
 		public function test_report_cancel() {
 			return $this->funds_account->report_cancel(self::$id);
 		}

 		// 测试：货币兑换
 		public function test_exchange_currency() {
 			$this->funds_account->save(self::$id, 'HKD', 200);
 			return ($this->funds_account->exchange_currency(self::$id, '4567890123', 'HKD', 'CNY', 200) === true);
 		}

 		// 测试：查询证券账户下的所有资金账户
		public function test_get_acc_by_stock_acc() {
			$result = $this->funds_account->get_acc_by_stock_acc(1);
			return (count($result) === 1);
		}

 		// 测试：补办
 		public function test_reapply() {
			$acc = array(
				'id' => self::$id,
 				'stock_account' 	=> 1, 
 				'trade_password' 	=> '1234567890', 
 				'withdraw_password' => '4567890123',
 				'id_card_number' 	=> '123455432112345678',
 				'customer_name' 	=> '陈译',
 				'state' 		=> 0);
 			return ($this->funds_account->reapply($acc, '123', '456') === true);
 		}
 		
 		// 测试：检查交易
 		public function test_check_trade() {
 			return ($this->funds_account->check_trade(self::$id, 'CNY', 160, '1234567890') === true);
 		}
		
		// 测试：冻结
		public function test_central_freeze() {
			$this->funds_account->central_freeze(1, self::$id, 'CNY', 160);
			$result = $this->db->get_where('currency', array('funds_account' => self::$id, 'currency_type' => 'CNY'))->row_array();
			return $result['frozen_balance'] == 160;
			/*
 			$bool1 = $this->funds_account->freeze_all($id);
 			$bool2 = $this->funds_account->unfreeze_all($id);
 			$bool3 = $this->funds_account->freeze($id, 'HKD', 100);
 			$bool4 = $this->funds_account->unfreeze($id, 'HKD', 100);
 			return $bool1 && $bool2 && $bool3 && $bool4;*/
 		}

		// 测试：确认交易
		public function test_central_spend_money() {
			return ($this->funds_account->central_spend_money(1, self::$id, 'CNY', 160) === true);
		}

		public function test_unfreeze() {
			$this->funds_account->central_unfreeze('0755a756ad78d38f11f306a73f5a24ef');
		}
		// 以下测试由管理员界面完成
		// 测试：通过挂失申请
		// 测试：驳回挂失申请
		// 测试：通过销户申请
		// 测试：驳回销户申请
		// 测试：交易记录查询

 		public function index() {
 			
 			$this->load->library('unit_test');
 			
 			$this->db->empty_table('funds_account');
 			$this->db->empty_table('deputing_order');

 			$this->unit->run($this->unit_test_test(3), true, '单元测试可用');
 			$this->unit->run($this->test_new_account(), true, '开户');
 			$this->unit->run($this->test_save(), true, '存钱');
 			$this->unit->run($this->test_withdraw(), true, '取钱');
 			$this->unit->run($this->test_verify_currency(), true, '验证币种');
 			$this->unit->run($this->test_change_trade_pwd(), true, '修改交易密码');
 			$this->unit->run($this->test_change_withdraw_pwd(), true, '修改取款密码');
 			$this->unit->run($this->test_report_loss(), true, '挂失');
 			$this->unit->run($this->test_report_cancel(), true, '销户');
 			$this->unit->run($this->test_exchange_currency(), true, '货币兑换');
 			$this->unit->run($this->test_get_acc_by_stock_acc(), true, '获取证券账户下的资金账户');
 			$this->unit->run($this->test_check_trade(), true, '检查交易');
 			$this->unit->run($this->test_central_freeze(), true, '冻结');
 			$this->unit->run($this->test_central_spend_money(), true, '确认交易');
 			//$this->unit->run($this->test_reapply(), true, '补办');
 			echo $this->unit->report();
 		}
 	}
?>