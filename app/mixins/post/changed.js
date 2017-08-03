import Ember from 'ember';

const {
  get
} = Ember;


/**
 * @description Make sure that users will not lost their data.
 */
export default Ember.Mixin.create({
  actions: {
    willTransition(transition) {
      const model = get(this.controller, 'model');

      if (get(model, 'hasDirtyAttributes')) {
        const confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
