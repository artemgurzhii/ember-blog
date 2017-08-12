import Ember from 'ember';

const {
  String
} = Ember;

export function capitalize([str]) {
  return String.capitalize(str);
}

export default Ember.Helper.helper(capitalize);
