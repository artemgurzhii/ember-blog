import Ember from 'ember';

const {
  get,
  RSVP,
  Route
} = Ember;

export default Route.extend({
  model({ post_id: id }) {
    const post = this.store.findRecord('post', id);
    const comments = this.store.findAll('comment', {
      filter: {
        post: id
      }
    });

    return RSVP.hash({
      post,
      comments
    });
  },

  titleToken(model) {
    return get(model, 'post.title');
  }
});
