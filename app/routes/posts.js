import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
  isNotLoggedIn: Ember.computed.equal('session.isAuthenticated', false),

  model() {
    return this.store.findAll('post');
  },

  beforeModel() {
    if (get(this, 'isNotLoggedIn')) {
      this.transitionTo('login');
    }
  }
});
