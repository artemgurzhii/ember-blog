import Ember from 'ember';
import { computed } from 'ember-decorators/object';
import isTypeOf from '../utils/is-type-of';

const {
  isEqual,
  Component
} = Ember;

export default Component.extend({
  tagName: '',

  @computed('model.user.username', 'session.currentUser.displayName')
  isAllowed(username, displayName) {
    return isTypeOf(username, 'string') && isTypeOf(displayName, 'string') && isEqual(username, displayName);
  }
});
