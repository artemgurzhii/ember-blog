import Ember from 'ember';

export default Ember.Mixin.create({
  titleIsNotEmpty: Ember.computed.notEmpty('model.title'),
  bodyIsNotEmpty: Ember.computed.notEmpty('model.body'),

  postIsNotEmpty: Ember.computed.or('bodyIsNotEmpty', 'titleIsNotEmpty'),

  _afterSave(post) {
    this.transitionToRoute('posts.show', post.id);
  }
});
