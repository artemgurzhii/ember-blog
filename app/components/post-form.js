import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  actions: {
    save(model) {
      get(this, 'action')(model);
    }
  }
});
