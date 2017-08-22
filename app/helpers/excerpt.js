import Ember from 'ember';

const {
  isPresent
} = Ember;

export function excerpt([desc, length = 100]) {
  if (isPresent(desc)) {
    return desc.slice(0, length);
  }

  return desc;
}

export default Ember.Helper.helper(excerpt);
