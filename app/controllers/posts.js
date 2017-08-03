import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  showAlert: false,
  isRegistered: false,
  didValidate: false,

  actions: {
    toggleProperty(prop) {
      this.toggleProperty(prop);
    }
  }
});
