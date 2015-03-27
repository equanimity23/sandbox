<?php

	require_once 'class.Chat.php';
	
	$sFunction = $_REQUEST['f'];
	
	switch ($sFunction) {
		case 'read':
			$nCount = $_REQUEST['n'];
			print Chat::read($nCount);
			break;
			
		case 'write':
			if (isset($_REQUEST['message'])) {
				Chat::write($_REQUEST['message'], $_REQUEST['user']);
			}
			break;
	}

?>