<?php

	require_once 'server.php';
	
	$sFileName = 'chatLog.txt';
	
	if (isset($_REQUEST['message'])) {
		write($sFileName, $_REQUEST['message']);
	}
	
	$sChatLog = read($sFileName);

?>

<html>
	<head>
		<title></title>
		<script src="jquery.js"></script>
		<script src="client.js"></script>
	</head>
	<body>
		<pre class="chat form"><?=$sChatLog?></pre>
		<div class="message form">
			<form action="" method="post">
				<table>
					<tr>
						<textarea name="message" placeholder="Type your message"></textarea>
					</tr>
					<tr>
						<input type="submit" class="button_send_message" value="Send" />
					</tr>
				</table>
			</form>
		</div>
		<script>
		</script>
	</body>
</html>

<!- once received from server.php, load chatLog content into div "chat form" ->