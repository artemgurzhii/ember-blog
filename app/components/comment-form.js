import Ember from 'ember';

const {
  set,
  get
} = Ember;

export default Ember.Component.extend({
  actions: {
    createComment(author, body, post) {
      get(this, 'createComment')(author, body, post);
      set(this, 'body', '');
    }
  }
});
