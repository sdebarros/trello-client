import Ember from 'ember';
import config from "trello-client/config/environment";
import fetch from "ember-network/fetch";

export default Ember.Route.extend({
  model() {
    let key = config.trello.apiKey;
    let token = config.trello.userToken;

    return fetch(`https://api.trello.com/1/members/me?token=${token}&key=${key}`).then(function(response) {
      console.log('==========', response);
      return response.json();
    });
  }
});
