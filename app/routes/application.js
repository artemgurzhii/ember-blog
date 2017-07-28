import Ember from 'ember';
const { get } = Ember;

export default Ember.Route.extend({
  session: Ember.inject.service(),
  isNotLoggedIn: Ember.computed.equal('session.isAuthenticated', false),

  beforeModel() {
    this._super(...arguments);

    // if (get(this, 'isNotLoggedIn')) {
    //   this.transitionToRoute('login');
    // }

    return get(this, 'session')
            .fetch()
            .catch(this._error.bind(this));
  },

  _error(message) {
    Ember.Logger.warn(message);
  }
});
