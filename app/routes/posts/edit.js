import Ember from 'ember';
import PostWasModified from '../../mixins/post/was-modified-or-created';
import AuthenticatedOnly from '../../mixins/authenticated-only';

const {
  get,
  Route,
  isEqual
} = Ember;

export default Route.extend(AuthenticatedOnly, PostWasModified, {
  model({ post_id: id }) {
    return this.store.findRecord('post', id);
  },

  titleToken(model) {
    const title = get(model, 'title');

    return `Edit ${title}`;
  }
});
