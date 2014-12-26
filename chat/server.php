<?php

	//$a = ['name'=>'Vlada', 'surname'=>'Pobedrya', 'sex'=>'sure!!!'];
	
	//print json_encode($a, true);
	

	$oChatLog = fopen('chatLog.txt', 'a');
	$sMessage = $_REQUEST . "\n";
	
	debug($_REQUEST);
	
	fwrite($oChatLog, $sMessage);
	
	fclose($oChatLog);

?>