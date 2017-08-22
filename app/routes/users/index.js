import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  titleToken: 'Users',

  model() {
    return this.store.findAll('user');
  }
});
