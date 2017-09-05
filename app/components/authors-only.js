import Ember from 'ember';
import { computed } from 'ember-decorators/object';

const {
  isNone,
  isEqual,
  Component
} = Ember;

export default Component.extend({
  tagName: '',

  @computed('model.user.username', 'session.currentUser.displayName')
  isAllowed(authorName, sessionName) {
    if (isNone(authorName) || isNone(sessionName)) {
      return false;
    }

    return isEqual(authorName, sessionName);
  }
});
