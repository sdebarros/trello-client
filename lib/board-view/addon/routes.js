import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('index', { path: '/:board_id' });
});
