import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(model) {
      this.sendAction('save', model);
    }
  }
});
