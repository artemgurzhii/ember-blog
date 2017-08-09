import Ember from 'ember';
import getOrCreateUser from '../../../utils/get-or-create-user';

const {
  get,
  Route,
  Logger,
  isEqual
} = Ember;

export default Route.extend({
  actions: {
    save(comment, post) {
      const isValid = get(comment, 'validations.isValid');

      if (isEqual(isValid, false)) {
        alert('Error, comment is not valid, please fix all errors and try again.');
        return;
      }

      getOrCreateUser(
        get(this, 'session.uid'),
        get(this, 'session.currentUser.displayName'),
        get(this, 'session.currentUser.photoURL'),
        get(this, 'store')
      ).then(user => {
        get(user, 'comments').addObject(comment);
        get(post, 'comments').addObject(comment);

        this._saveRecord(comment)
          .then(this._saveRecord.bind(this, post))
          .then(this._saveRecord.bind(this, user))
          .then(this._success.bind(this))
          .catch(error => this._error(error, user, post, comment));
        });
    }
  },

  _saveRecord(model) {
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
