import Ember from 'ember';
import config from "trello-client/config/environment";
import fetchJson from 'trello-client/lib/fetch';

let { RSVP } = Ember;

export default Ember.Route.extend({
  model(params) {
    let key = config.trello.apiKey;
    let token = config.trello.userToken;
    let boardId = params.board_id;

    return RSVP.hash({
      board: fetchJson(`https://api.trello.com/1/boards/${boardId}?token=${token}&key=${key}`),
      lists: fetchJson(`https://api.trello.com/1/boards/${boardId}/lists?token=${token}&key=${key}`),
      cards: fetchJson(`https://api.trello.com/1/boards/${boardId}/cards?token=${token}&key=${key}`)
    });
  }
});
