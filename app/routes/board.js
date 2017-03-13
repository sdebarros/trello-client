import Ember from 'ember';
import config from "trello-client/config/environment";
import fetch from "ember-network/fetch";

let { RSVP } = Ember;

export default Ember.Route.extend({
  model(params) {
    let key = config.trello.apiKey;
    let token = config.trello.userToken;
    let boardId = params.board_id;

    return RSVP.hash({
      board: fetch(`https://api.trello.com/1/boards/${boardId}?token=${token}&key=${key}`),
      lists: fetch(`https://api.trello.com/1/boards/${boardId}/lists?token=${token}&key=${key}`),
      cards: fetch(`https://api.trello.com/1/boards/${boardId}/cards?token=${token}&key=${key}`)
    });
  }
});
