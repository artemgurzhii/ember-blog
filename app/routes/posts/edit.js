import Ember from 'ember';
import PostWasModified from '../../mixins/post/was-modified-or-created';

const {
  get,
  Route
} = Ember;

export default Route.extend(PostWasModified, {
  model({ post_id: id }) {
    return this.store.findRecord('post', id);
  },

  titleToken(model) {
    const title = get(model, 'title');

    return `Edit ${title}`;
  }
});
