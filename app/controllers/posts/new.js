import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    savePost(newPost) {
      newPost.save().then(() => {
        this.get('model').setProperties({
          title: '',
          body: ''
        });
        this.transitionToRoute('posts/show', newPost.id);
      });
    }
  }
});
