import Ember from 'ember';

const { get } = Ember;

export default Ember.Controller.extend({
  isNotLoggedIn: Ember.computed.equal('session.isAuthenticated', false),

  init() {
    this._super(...arguments);

    if (get(this, 'isNotLoggedIn')) {
      this.transitionToRoute('login');
    }
  },
});
