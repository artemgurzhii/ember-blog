import Ember from 'ember';
import RSVP from 'rsvp';

const {
  get,
  isEqual
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
  return new RSVP.Promise(resolve => {
    store.query('user', {
      orderBy: 'uid',
      equalTo: uid
    }).then(users => {
      if (isEqual(get(users, 'length'), 0)) {
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
