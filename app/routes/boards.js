import Ember from 'ember';
import config from 'trello-client/config/environment';
import fetchJson from 'trello-client/lib/fetch';

export default Ember.Route.extend({
  model() {
    let key = config.trello.apiKey;
    let token = config.trello.userToken;

    return fetchJson(`https://api.trello.com/1/members/me/boards?token=${token}&key=${key}`);
  }
});
