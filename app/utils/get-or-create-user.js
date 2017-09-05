import Ember from 'ember';
import { FAIL } from './states';

const {
  get,
  RSVP,
  Logger,
  isNone,
  isEmpty
} = Ember;

/**
 * @description Get user from the store or create if it doesn't yet exist.
 *
 * @param {String} uid - User ID.
 * @param {String} username - User name.
 * @param {String} avatar - User avatar URL.
 * @param {Object} store - DB store in which to find/create user.
 *
 * @return {Promise} - Finded/Created user record.
 */
export default function getOrCreateUser(uid, username, avatar, store) {
  const args = Array.from(arguments);

  if (args.length !== 4 || args.any(isNone)) {
    Logger.warn('Wrong arguments passed: Expected - uid, username, avatar, store');

    return FAIL;
  }

  return new RSVP.Promise(resolve => {
    store.query('user', {
      orderBy: 'uid',
      equalTo: uid
    }).then(users => {
      if (isEmpty(users)) {
        resolve(store.createRecord('user', {
          uid,
          username,
          avatar
        }));
      } else {
        resolve(get(users, 'firstObject'));
      }
    });
  });
}
