import Ember from 'ember';

const {
  get,
  isNone,
  isEqual,
  computed,
  Component
} = Ember;

export default Component.extend({
  tagName: '',

  isAllowed: computed('model.user.username', 'session.currentUser.displayName', function () {
    const authorName = get(this, 'model.user.username');
    const sessionName = get(this, 'session.currentUser.displayName');

    if (isNone(authorName) || isNone(sessionName)) {
      return false;
    }

    return isEqual(authorName, sessionName);
  })
});
