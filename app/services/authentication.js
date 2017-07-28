import Ember from 'ember';

const { set, get } = Ember;

export default Ember.Service.extend({
  email: '',
  password: '',
  isAuthorized: false,
  session: Ember.inject.service(),

  init() {
    this._super(...arguments);

    return get(this, 'session')
            .fetch()
            .catch(this._error.bind(this));
  }

  signIn() {
    const { email, password } = getProperties(this, 'email', 'password');

    get(this, 'session')
      .open('firebase', {
        provider: 'password',
        email,
        password
      })
      .then(this._success.bind(this))
      .catch(this._error.bind(this));
  },

  signOut() {
    set(this, 'isAuthorized', false);
    get(this, 'session').close();
  },

  _success(message) {
    set(this, 'isAuthorized', true);
    Ember.Logger.log(message);
  },

  _error(message) {
    set(this, 'isAuthorized', false);
    set(this, 'errorMessage', 'Wrong email or password');
    Ember.Logger.warn(message);
  }
});
