import Ember from 'ember';
import PostHasChanged from '../../mixins/post/changed';

export default Ember.Route.extend(PostHasChanged, {
  model({ post_id: id }) {
    return this.store.findRecord('post', id);
  }
});
