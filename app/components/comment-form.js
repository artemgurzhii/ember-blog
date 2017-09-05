import Ember from 'ember';
import { SUCCESS } from '../utils/states';

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

      if (isEqual(result, SUCCESS)) {
        set(this, 'body', '');
      }
    }
  }
});
