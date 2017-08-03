import Ember from 'ember';
import getOrCreateUser from '../utils/get-or-create-user';
import PostMixin from '../mixins/post';

const {
  get
} = Ember;

export default Ember.Route.extend(PostMixin, {
  actions: {
    createComment(author, body, post) {
      const displayName = get(this, 'session.currentUser.displayName');
      const photoURL = get(this, 'session.currentUser.photoURL');

      const { store } = this;
      const uid = get(author, 'uid');
      const comment = store.createRecord('comment', {
        body
      });

      getOrCreateUser(
        uid,
        displayName,
        photoURL,
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
