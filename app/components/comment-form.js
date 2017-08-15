import Ember from 'ember';
import STATE from '../utils/states';

const {
  set,
  get,
  isEqual,
  Component
} = Ember;

export default Component.extend({
  classNames: ['box', 'comment-form'],

  actions: {
    save(body, post) {
      const result = get(this, 'save')(body, post);

      if (isEqual(result, STATE.SUCCESS)) {
        set(this, 'body', '');
      }
    }
  }
});
