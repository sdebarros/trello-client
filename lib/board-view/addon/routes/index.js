import Ember from 'ember';

export default Ember.Route.extend({
  trelloApi: Ember.inject.service('trello-api'),

  model(params) {
    let boardId = params.board_id;
    let trelloApi = this.get('trelloApi');

    return Ember.RSVP.hash({
      board: trelloApi.board(boardId),
      lists: trelloApi.lists(boardId),
      cards: trelloApi.cards(boardId)
    });
  }
});
