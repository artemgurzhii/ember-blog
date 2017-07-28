import Ember from 'ember';
import PostMixin from '../../mixins/post';

const { set } = Ember;

export default Ember.Controller.extend(PostMixin, {
  title: 'Update post',

  actions: {
    updatePost(post) {
      set(post, 'updated_at', new Date());
      post.save().then(this._afterSave.bind(this));
    }
  }
});
