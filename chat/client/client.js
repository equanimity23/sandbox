var getParameterByName = function(sName) {
	sName = sName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var oRegex = new RegExp('[\\?&]' + sName + '=([^&#]*)'),
	aResults = oRegex.exec(location.search);
	return aResults === null ? '' : decodeURIComponent(aResults[1].replace(/\+/g, ' '));
}

var formatTime = function(unixTimestamp, bAddDate) {
	bAddDate = bAddDate || false;
	var oDate = new Date(unixTimestamp * 1000);

	var hours = oDate.getHours();
	var minutes = oDate.getMinutes();
	var seconds = oDate.getSeconds();

	// the above oDate.get...() functions return a single digit
	// so I prepend the zero here when needed
	if (hours < 10) 
	 hours = '0' + hours;

	if (minutes < 10) 
	 minutes = '0' + minutes;

	if (seconds < 10) 
	 seconds = '0' + seconds;
	
	if (bAddDate) {
		return oDate.toDateString() + ' ' + hours + ':' + minutes + ':' + seconds;
	} else {
		return hours + ':' + minutes + ':' + seconds;
	}
}

var pollMessages = function() {
	setTimeout(pollMessages, 3000);
	if (getParameterByName('user') !== '') {
		getMessages(function(aData) {
			showMessages(aData);
		});
	} else {
		location.href = 'http://localhost/sandbox/chat/index.html';
	}
}

var sendMessage = function(sMessage, fCallback) {
	$.ajax({
		url      : 'http://localhost/sandbox/chat/server/server.php',
		type     : 'POST',
		data     : {message: sMessage, f: 'write', user: getParameterByName('user')},
		
		success: function() {
			if (fCallback) { fCallback(); }
		},
		error: function(oRequest, sError) {
			console.log('ERROR sending message:', sError);
		}
	});
};

var showMessages = function(aMessages) {
	$('#messages').html('');
	for (var n=0; n<aMessages.length; n++) {
		var sDate = formatTime(aMessages[n].time, true);
		$('#messages').append('<div>' + 
			'<b>' + aMessages[n].user + '</b>&nbsp;' +
			'<i>' + aMessages[n].message + '</i>&nbsp;' +
			'<u>' + sDate + '</u>' +
		'</div>');
	}
};

var getMessages = function(fCallback) {
	$.ajax({
		url      : 'http://localhost/sandbox/chat/server/server.php?f=read',
		type     : 'GET',
		dataType : 'json',
		
		success: function(aData) {
			if (fCallback) { fCallback(aData); }
		},
		error: function(oRequest, sError) {
			console.log('ERROR receiving messages', sError);
		}
	});
}

$(document).ready(function() {
	pollMessages();
	$('#button_send_message').click(function() {
		var sMessage = $('#message').val();
		$('#message').val('');
		sendMessage(sMessage, function() {
			getMessages(function(aData) {
				showMessages(aData);
			});
		});
	});
});
