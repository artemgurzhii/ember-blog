import Ember from 'ember';

const {
  get,
  Component
} = Ember;

export default Component.extend({
  classNames: ['navigation-bar'],

  actions: {
    logout() {
      get(this, 'logout')();
    },

    login() {
      get(this, 'login')();
    }
  }
});
