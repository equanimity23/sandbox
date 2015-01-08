<?php

	function write($sFileName, $sMessage) {
		$oChatLog  = fopen($sFileName, 'a');
		fwrite($oChatLog, $sMessage . PHP_EOL);
		fclose($oChatLog);
	}
	
	function read($sFileName) {
		return file_get_contents($sFileName);
	}
	
?>