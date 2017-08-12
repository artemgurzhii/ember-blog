import Ember from 'ember';

export function excerpt([desc, length = 100]) {
  return desc.slice(0, length);
}

export default Ember.Helper.helper(excerpt);
