import Ember from 'ember';
import RSVP from 'rsvp';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ user_id: id }) {
    return RSVP.hash({
      user: this.store.findRecord('user', id),
      posts: this.store.findAll('post', {
        filter: {
          user: id
        }
      })
    });
  },

  titleToken(model) {
    return get(model, 'user.username');
  },
});
