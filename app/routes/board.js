import Ember from 'ember';
import config from "trello-client/config/environment";

let { $, RSVP } = Ember;

export default Ember.Route.extend({
  model(params) {
    let key = config.trello.apiKey;
    let token = config.trello.userToken;
    let boardId = params.board_id;

    return RSVP.hash({
      board: $.getJSON(`https://api.trello.com/1/boards/${boardId}?token=${token}&key=${key}`),
      lists: $.getJSON(`https://api.trello.com/1/boards/${boardId}/lists?token=${token}&key=${key}`),
      cards: $.getJSON(`https://api.trello.com/1/boards/${boardId}/cards?token=${token}&key=${key}`)
    });
  }
});
