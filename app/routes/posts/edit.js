import Ember from 'ember';

export default Ember.Route.extend({
  model({ post_id: id }) {
    return  this.store.findRecord('post', id);
  }
});
