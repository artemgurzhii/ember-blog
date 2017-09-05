import Ember from 'ember';
import { action } from 'ember-decorators/object';

const {
  get
} = Ember;

export default Ember.Mixin.create({

  @action
  /**
   * @description Make sure that users will not lost their data.
   */
  willTransition(transition) {
    const model = get(this.controller, 'model');

    if (get(model, 'hasDirtyAttributes')) {
      const confirmation = confirm('Your changes haven\'t saved yet. Would you like to leave this form?');

      if (confirmation) {
        model.rollbackAttributes();
      } else {
        transition.abort();
      }
    }
  }
});
