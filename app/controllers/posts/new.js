import Ember from 'ember';
import PostMixin from '../../mixins/post';

export default Ember.Controller.extend(PostMixin, {
  title: 'Create post',

  actions: {
    savePost(post) {
      post.save().then(this._afterSave.bind(this));
    }
  }
});
