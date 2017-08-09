import Ember from 'ember';

const {
  set,
  get,
  Component
} = Ember;

export default Component.extend({
  actions: {
    save(comment, post) {
      get(this, 'save')(comment, post);
      set(comment, 'body', '');
    }
  }
});
