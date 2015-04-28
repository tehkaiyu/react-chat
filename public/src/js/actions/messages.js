var Dispatcher = require('../dispatchers/dispatcher');

var messagesActions = {
	changeOpenChat: function(newUserID){
		Dispatcher.handleViewAction({
			type: 'updateOpenChatID',
			userID: newUserID
		});
	}
};

modules.exports = messagesActions;