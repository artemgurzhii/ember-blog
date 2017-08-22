import Ember from 'ember';

const {
  String,
  isPresent
} = Ember;

export function capitalize([str]) {
  if (isPresent(str)) {
    return String.capitalize(str);
  }

  return str;
}

export default Ember.Helper.helper(capitalize);
