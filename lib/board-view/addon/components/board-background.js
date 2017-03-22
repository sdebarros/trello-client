import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  attributeBindings: ['style'],
  style: computed('board.prefs.{backgroundColor,backgroundImage}', {
    get() {
      let backgroundImage = this.get('board.prefs.backgroundImage');
      let backgroundColor = this.get('board.prefs.backgroundColor');

      if (backgroundImage) {
        return `background-image: url("${backgroundImage}")`.htmlSafe();
      } else if (backgroundColor) {
        return `background-color:${backgroundColor}`.htmlSafe();
      }
    }
  })
});
