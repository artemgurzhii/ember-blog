import Ember from 'ember';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ user_id: id }) {
    return this.store.findRecord('user', id);
  },

  titleToken(model) {
    return get(model, 'user.username');
  },
});
