import Ember from 'ember';
import PostValidations from './validations/post';
import getOrCreateUser from '../utils/get-or-create-user';

const {
  set,
  get,
  isEqual,
  getProperties
} = Ember;

export default Ember.Mixin.create(PostValidations, {
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
  },

  actions: {
    delete(post) {
      const confirmation = confirm('Are you sure?');

      if (confirmation) {
        post
          .destroyRecord()
          .then(this._afterDelete.bind(this));
      }
    },

    save(post, type) {
      const uid = get(this, 'session.uid');

      const {
        store
      } = this;

      const {
        username,
        profileImageURL
      } = getProperties(this, 'session.currentUser.displayName', 'session.currentUser.photoURL');

      if (isEqual(type, 'edit')) {
        set(post, 'updated_at', new Date());
      }

      getOrCreateUser(
        uid,
        username,
        profileImageURL,
        store
      ).then(userData => {
        get(userData, 'posts').addObject(post);

        Ember.Logger.log(get(post, 'title'));

        post
          .validate().then(function() {
            Ember.Logger.log('Validating');
            Ember.Logger.log(`isValid: ${get(post, 'isValid')}`);
            Ember.Logger.log(`Errors: ${get(post, 'errors')}`);
          })
          .save()
          .then(() => userData.save())
          .then(this._afterSave.bind(this));
      });

      set(this, 'title', '');
      set(this, 'body', '');
      this.transitionTo('index');
    }
  }
});
