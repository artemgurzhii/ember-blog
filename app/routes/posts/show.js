import Ember from 'ember';
import RSVP from 'rsvp';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ post_id: id }) {
    return RSVP.hash({
      post: this.store.findRecord('post', id),
      comments: this.store.findAll('comment', {
        filter: {
          post: id
        }
      }),
      comment: this.store.createRecord('comment')
    });
  },

  titleToken(model) {
    return get(model, 'post.title');
  }
});
