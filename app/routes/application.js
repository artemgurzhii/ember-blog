import Ember from 'ember';
import { service } from 'ember-decorators/service';
import { action } from 'ember-decorators/object';

const {
  get,
  Route,
  Logger,
  isEmpty
} = Ember;

export default Route.extend({
  @service session: null,

  beforeModel() {
    return get(this, 'session')
            .fetch()
            .catch(function() {});
  },

  @action
  login() {
    get(this, 'session')
      .open('firebase', {
        provider: 'twitter'
      })
      .then(this._success.bind(this))
      .catch(this._error.bind(this));
  },

  @action
  logout() {
    get(this, 'session').close();
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
