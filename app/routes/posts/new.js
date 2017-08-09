import Ember from 'ember';
import PostWasCreated from '../../mixins/post/was-modified-or-created';

const {
  get,
  Route,
  isEqual
} = Ember;

export default Route.extend(PostWasCreated, {
  session: Ember.inject.service('session'),
  titleToken: 'New Post',

  model() {
    return this.store.createRecord('post');
  },

  beforeModel() {
    const isAuthenticated = get(this, 'session.isAuthenticated');

    if (isEqual(isAuthenticated, false)) {
      this.transitionTo('posts');
    }
  }
});
