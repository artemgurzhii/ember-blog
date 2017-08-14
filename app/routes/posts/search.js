import Ember from 'ember';

const {
  Route,
  isPresent
} = Ember;

export default Route.extend({
  actions: {
    filterByTitle(title) {
      if (isPresent(title)) {
        return this.store.findAll('post');
      } else {
        return this.store.findAll('post');
      }
    }
  }
});
