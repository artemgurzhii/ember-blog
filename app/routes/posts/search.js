import Ember from 'ember';

const {
  Route,
  isPresent
} = Ember;

export default Route.extend({
  actions: {
    filterByTitle(title) {
      if (isPresent(title)) {
        return this.store.query('post', { title });
      }

      return this.store.findAll('post');
    }
  }
});
