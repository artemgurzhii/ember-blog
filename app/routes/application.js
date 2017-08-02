import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
  beforeModel() {
    return get(this, 'session')
            .fetch()
            .catch(this._error.bind(this));
  },

  actions: {
    login() {
      get(this, 'session')
        .open('firebase', { provider: 'twitter' })
        .then(this._success.bind(this));
    },

    logout() {
      get(this,'session').close();
    }
  },

  _success(data) {
    Ember.Loggger.log(data);
  },

  // Application route should return the session fetch promise
  _error() {}
});
