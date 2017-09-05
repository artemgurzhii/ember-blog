import Ember from 'ember';

const {
  typeOf
} = Ember;

/**
 * @description Is given object is of expected type.
 *
 * @param {*} obj - Object to test on certain type.
 * @param {String} type - Expected type
 *
 * @return {Boolean} - Whether type of given given object is same as expected
 */
export default function isTypeOf(obj, type) {
  return typeOf(obj) === type;
}
