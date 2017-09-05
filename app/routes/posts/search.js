import Ember from 'ember';
import { action } from 'ember-decorators/object';

const {
  Route,
  isPresent
} = Ember;

export default Route.extend({
  @action
  filterByTitle(title) {
    if (isPresent(title)) {
      return this.store.query('post', { title });
    }

    return this.store.findAll('post');
  }

});
