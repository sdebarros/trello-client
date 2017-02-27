import Ember from 'ember';
import config from "trello-client/config/environment";

let { $ } = Ember;

export default Ember.Route.extend({
  model() {
    let key = config.trello.apiKey;
    let token = config.trello.userToken;

    return $.getJSON(`https://api.trello.com/1/members/me?token=${token}&key=${key}`);
  }
});
