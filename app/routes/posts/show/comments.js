import Ember from 'ember';
import RSVP from 'rsvp';
import getOrCreateUser from '../../../utils/get-or-create-user';
import STATE from '../../../utils/states';

const {
  get,
  Route,
  Logger,
  isEqual
} = Ember;

export default Route.extend({
  actions: {

    // NOTE: Action returns state, on which depends whether comment text field should be cleared.
    save(body, post) {
      const comment = this.store.createRecord('comment', { body });

      const isValid = get(comment, 'validations.isValid');

      if (isEqual(isValid, false)) {
        alert('Error, comment is not valid, please fix all errors and try again.');
        comment.destroyRecord();
        return STATE.FAIL;
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

      return STATE.SUCCESS;
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
