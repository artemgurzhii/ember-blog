import Ember from 'ember';

export default Ember.Controller.extend({
  showAlert: false,
  isRegistered: false,
  didValidate: false,

  actions: {
    toggleProperty(prop) {
      this.toggleProperty(prop);
    }
  }
});
