import Ember from 'ember';

const {
  set,
  get
} = Ember;

export default Ember.Component.extend({
  actions: {
    save(comment, post) {
      get(this, 'save')(comment, post);
      set(comment, 'body', '');
    }
  }
});
