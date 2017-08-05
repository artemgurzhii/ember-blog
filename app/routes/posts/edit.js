import Ember from 'ember';
import PostWasModified from '../../mixins/post/was-modified-or-created';

const {
  Route
} = Ember;

export default Route.extend(PostWasModified, {
  model({ post_id: id }) {
    return this.store.findRecord('post', id);
  },

  titleToken(model) {
    const title = model.post.get('title');
    return `Edit ${title}`
  },
});
