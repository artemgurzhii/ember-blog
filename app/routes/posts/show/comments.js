import Ember from 'ember';
import getOrCreateUser from '../../../utils/get-or-create-user';

const {
  get,
  Route,
  Logger
} = Ember;

export default Route.extend({
  actions: {
    createComment(author, body, post) {
      const user = getOrCreateUser(
        get(author, 'uid'),
        get(this, 'session.currentUser.displayName'),
        get(this, 'session.currentUser.photoURL'),
        get(this, 'store')
      );

      const comment = this.store.createRecord('comment', { body });

      comment
        .validate()
        .then(({ validations }) => {
          if (get(validations, 'isValid')) {
            this._createComment(user, post, comment);
          }
        });
    }
  },

  _createComment(user, post, comment) {
    user.then(userData => {
      get(userData, 'comments').addObject(comment);
      get(post, 'comments').addObject(comment);

      this._save(comment)
        .then(this._save.bind(this, post))
        .then(this._save.bind(this, userData))
        .then(this._success.bind(this))
        .catch(error => this._error(error, user, post, comment));
      });
  },

  _save(model) {
    return model.save();
  },

  _success() {
    alert('Comment was successfully saved.');
  },

  _error(error, user, post, comment) {
    Logger.warn('Error while creating comment', error);

    user.rollbackAttributes();
    post.rollbackAttributes();
    comment.rollbackAttributes();
  }
});
