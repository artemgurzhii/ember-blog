import Ember from 'ember';
import PostWasModified from '../../mixins/post/was-modified-or-created';

const {
  get,
  Route
} = Ember;

export default Route.extend(PostWasModified, {
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  titleToken(model) {
    const title = get(model, 'title');

    return `Edit ${title}`;
  }
});
