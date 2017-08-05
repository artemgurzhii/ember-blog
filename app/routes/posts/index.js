import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  titleToken: 'Posts',

  model() {
    return this.store.findAll('post');
  }
});
