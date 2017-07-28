import Ember from 'ember';

const { set, get, getProperties } = Ember;

export default Ember.Controller.extend({
  email: '',
  password: '',

  isLoggedIn: Ember.computed.equal('session.isAuthenticated', true),

  init() {
    this._super(...arguments);

    if (get(this, 'isLoggedIn')) {
      this.transitionToRoute('index');
    }
  },

  actions: {
    login() {
      const { email, password } = getProperties(this, 'email', 'password');

      get(this, 'session')
        .open('firebase', {
          provider: 'password',
          email,
          password
        })
        .then(this._success.bind(this))
        .catch(this._error.bind(this));
    }
  },

  _success() {
    set(this, 'errorMessage', '');
    this.transitionToRoute('index');
  },

  _error(message) {
    set(this, 'errorMessage', 'Wrong email or password');
    Ember.Logger.warn(message);
  }
});
