import Ember from 'ember';
import PostWasCreated from '../../mixins/post/was-modified-or-created';
import AuthenticatedOnly from '../../mixins/authenticated-only';

const {
  get,
  Route
} = Ember;

export default Route.extend(AuthenticatedOnly, PostWasCreated, {
  titleToken: 'New Post',

  model() {
    return get(this, 'store').createRecord('post');
  }
});
