<?
// Episode ID, Spell ID, ...
// 10000000001,100001,...
// 10000000002,100001,
// 10000000003,100002,
// 10000000004,100002,
// 
// 
// 100000000001,100001
// 100000000001,100001
// 100000000001,100001

	$nLines  = 100000000;
	$aHeader = ['Episode ID', 'Spell ID'];
	$aInit   = [100000001, 100001];
	$aIncr   = [1, 0.5];
	$sLine   = implode(',', $aHeader) . "\n";
	$oFile1  = fopen('1.csv', 'w');
	fwrite($oFile1, $sLine);
	
	for ($n=0; $n<$nLines; $n++) {
		$sLine = ($aInit[0] + floor($n*$aIncr[0])) . ',' . ($aInit[1] + floor($n*$aIncr[1])) . "\n";
		fwrite($oFile1, $sLine);
	}
	
	fclose($oFile1);
	
?>


