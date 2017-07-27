import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePost(updatedPost) {
      updatedPost.save().then(() => {
        this.transitionToRoute('posts.show', updatedPost.id);
      });
    }
  }
});
