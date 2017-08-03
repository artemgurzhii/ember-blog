import Ember from 'ember';
import getOrCreateUser from '../utils/get-or-create-user';
import PostMixin from '../mixins/post';

const {
  get,
  getProperties
} = Ember;

export default Ember.Route.extend(PostMixin, {
  actions: {
    createComment(author, body, post) {
      const {
        username,
        profileImageURL
      } = getProperties(this, 'session.currentUser.displayName', 'session.currentUser.photoURL');

      const { store } = this;
      const uid = get(author, 'uid');
      const comment = store.createRecord('comment', {
        body
      });

      getOrCreateUser(
        uid,
        username,
        profileImageURL,
        store
      ).then(user => {
        get(user, 'comments').addObject(comment);
        get(post, 'comments').addObject(comment);

        return comment
          .save()
          .then(() => post.save())
          .then(() => user.save())
      });
    }
  }
});
