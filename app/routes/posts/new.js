import Ember from 'ember';
import PostWasCreated from '../../mixins/post/was-modified-or-created';

const {
  Route
} = Ember;

export default Route.extend(PostWasCreated, {
  model() {
    return this.store.createRecord('post');
  }
});
