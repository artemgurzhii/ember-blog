import Ember from 'ember';

const {
  get,
  Route
} = Ember;

export default Route.extend({
  model({ category_id: id }) {
    return this.store.findRecord('tag', id);
  },

  titleToken(model) {
    return get(model, 'tag.name');
  }
});
