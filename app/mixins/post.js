import Ember from 'ember';
import { action } from 'ember-decorators/object';
import getOrCreateUser from '../utils/get-or-create-user';

const {
  set,
  get,
  Mixin,
  isEqual,
  setProperties
} = Ember;

export default Mixin.create({
  /**
   * @description Callback function which to execute after post is being deleted.
   */
  _afterDelete() {
    this.transitionTo('posts');
  },

  /**
   * @description Resetting post model fields.
   */
  _clearData() {
    setProperties(this, {
      title: '',
      body: ''
    });
  },

  /**
   * @description Callback function which to execute after post is being saved.
   *
   * @param {Number} id - ID of the created post.
   */
  _afterSave({ id }) {
    this.transitionTo('posts.show', id);
  },

  @action
  delete(post) {
    const confirmation = confirm('Are you sure?');

    if (confirmation) {
      post
        .destroyRecord()
        .then(this._afterDelete.bind(this));
    }
  },

  @action
  save(post, type) {
    const isValid = get(post, 'validations.isValid');

    if (isEqual(isValid, false)) {
      alert('Error, post is not valid, please fix all errors and try again.');

      return;
    }

    if (isEqual(type, 'edit')) {
      set(post, 'updated_at', new Date());
    }

    getOrCreateUser(
      get(this, 'session.uid'),
      get(this, 'session.currentUser.displayName'),
      get(this, 'session.currentUser.photoURL'),
      get(this, 'store')
    ).then(userData => {
      get(userData, 'posts').addObject(post);

      post
        .save()
        .then(() => userData.save())
        .then(this._clearData.bind(this))
        .then(this._afterSave.bind(this, post));
    });
  }
});
