import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('boards', { path: '/' });
  this.mount('board-view', { as: 'board' });
});

export default Router;
