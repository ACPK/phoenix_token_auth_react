var keyMirror = require('keymirror');

var APIRoot = "/api";

module.exports = {
  APIEndpoints: {
    LOGIN: APIRoot + "/v1/sessions",
    REGISTRATION: APIRoot + "/v1/users",
    CONFIRM: APIRoot + "/v1/users/%{userId}/confirm",
    SECRETS: APIRoot + "/v1/secrets"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    REDIRECT: null,
    SIGNUP_REQUEST: null,
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,
    CONFIRM_RESPONSE: null,
    SIGNUP_RESPONSE: null,
    LOAD_SECRETS: null,
    RECEIVE_SECRETS: null,
    LOGOUT: null
  })
};
