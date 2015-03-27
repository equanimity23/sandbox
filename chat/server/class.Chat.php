<?php

	require_once 'settings.php';

	class Chat {
		
		public static function write($sMessage, $sUserName = 'anonymous') {
			$sMessage = trim($sMessage);
			if ($sMessage) {
				if (!file_exists($_ENV['SETTINGS']['CHAT_LOG_FILE'])) {
					$sHeader = 'user,message,time';
					file_put_contents($_ENV['SETTINGS']['CHAT_LOG_FILE'], $sHeader);
				}
				$sLine    = PHP_EOL . $sUserName . ',' . $sMessage . ',' . time();
				$oChatLog = fopen($_ENV['SETTINGS']['CHAT_LOG_FILE'], 'a');
			
				fwrite($oChatLog, $sLine);
				fclose($oChatLog);
			}
		}
	
		public static function read($nCount) {
			if (file_exists($_ENV['SETTINGS']['CHAT_LOG_FILE'])) {
				$aJson   = [];
				$aLines  = file($_ENV['SETTINGS']['CHAT_LOG_FILE']);
				$aHeader = explode(',', array_shift($aLines));
				$aLines  = array_slice($aLines, $nCount);
				
				foreach ($aLines as $sLine) {
					$aLine = explode(',', $sLine);
					$aPairs = [];
					for ($n=0; $n<count($aHeader); $n++) {
						$aPairs[] = '"' . trim($aHeader[$n]) . '":"' . trim($aLine[$n]) . '"';
					}
					$aJson[] = '{' . implode(',', $aPairs) . '}';
				}
				
				return '[' . implode(',', $aJson) . ']';
			} else {
				return '[]';
			}
		}
	}
?>