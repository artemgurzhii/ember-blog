import Ember from 'ember';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ post_id: id }) {
    return this.store.findRecord('post', id);
  },

  titleToken(model) {
    return get(model, 'post.title');
  }
});
