import Ember from 'ember';
import config from 'trello-client/config/environment';
import fetchJson from 'trello-client/lib/fetch';

export default Ember.Service.extend({
  key: config.trello.apiKey,
  token: config.trello.userToken,

  board(boardId) {
    return fetchJson(`https://api.trello.com/1/boards/${boardId}?token=${this.token}&key=${this.key}`);
  },
  lists(boardId) {
    return fetchJson(`https://api.trello.com/1/boards/${boardId}/lists?token=${this.token}&key=${this.key}`);
  },
  cards(boardId) {
    return fetchJson(`https://api.trello.com/1/boards/${boardId}/cards?token=${this.token}&key=${this.key}`);
  }
});
