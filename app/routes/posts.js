import Ember from 'ember';
// import getOrCreateUser from '../utils/get-or-create-user';

const {
  set,
  // get,
  isEqual,
  // getProperties
} = Ember;

export default Ember.Route.extend({
  actions: {
    delete(post) {
      post
        .destroyRecord()
        .then(this._afterDelete.bind(this));
    },

    save(post, type) {
      if (isEqual(type, 'edit')) {
        set(post, 'updated_at', new Date());
      }

      post
        .save()
        .then(this._afterSave.bind(this));
    }
  },
  //
  //   createComment(author, body, post) {
  //     const {
  //       username,
  //       profileImageURL
  //     } = getProperties(this, 'session.currentUser.username', 'session.currentUser.profileImageURL');
  //
  //     const { store } = this;
  //     const uid = get(author, 'uid');
  //     const comment = store.createRecord('comment', {
  //       body
  //     });
  //
  //     getOrCreateUser(
  //       uid,
  //       username,
  //       profileImageURL,
  //       store
  //     ).then(user => {
  //       get(user, 'comments').addObject(comment);
  //       get(post, 'comments').addObject(comment);
  //
  //       return comment
  //         .save()
  //         .then(() => post.save())
  //         .then(() => user.save())
  //     });
  //   }
  // },

  /**
   * @description Callback function which to execute after post is being deleted.
   */
  _afterDelete() {
    this.transitionTo('posts');
  },

  /**
   * @description Callback function which to execute after post is being saved.
   *
   * @param {Number} id - ID of the created post.
   */
  _afterSave({ id }) {
    this.transitionTo('posts.show', id);
  }
});
