var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/constants.js');

var ActionTypes = Constants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    Dispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },
};