import Ember from 'ember';

const {
  get,
  Route,
  Logger,
  isEmpty
} = Ember;

export default Route.extend({
  session: Ember.inject.service(),

  beforeModel() {
    return get(this, 'session')
            .fetch()
            .catch(function() {});
  },

  actions: {
    login() {
      get(this, 'session')
        .open('firebase', {
          provider: 'twitter'
        })
        .then(this._success.bind(this))
        .catch(this._error.bind(this));
    },

    logout() {
      get(this, 'session').close();
    }
  },

  _success(message) {
    Logger.log('Logged in successfully: ', message);
  },

  _error(error) {
    Logger.warn('Error occurred while logging in:', error);
  },

  title(tokens) {
    const base = 'Ember Blog';
    if (isEmpty(tokens)) {
      return base;
    }

    return `${tokens.join(' - ')} - ${base}`;
  },
});
