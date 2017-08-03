import Ember from 'ember';

const {
  RSVP,
  Route
} = Ember;

export default Route.extend({
  model({ post_id: id }) {
    return RSVP.hash({
      post: this.store.findRecord('post', id)
    });
  }
});
