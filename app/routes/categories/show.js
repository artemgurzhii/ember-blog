import Ember from 'ember';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ tag_id: id }) {
    return this.store.findRecord('category', id);
  },

  titleToken(model) {
    return get(model, 'category.name');
  }
});
