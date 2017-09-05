import getOrCreateUser from 'ember-blog/utils/get-or-create-user';
import { FAIL } from 'ember-blog/utils/states';
import { module, test } from 'qunit';

module('Unit | Utility | get or create user');

test('no arguments passed', function(assert) {
  const user = getOrCreateUser();

  assert.equal(user, FAIL);
});

test('arguments are invalid', function(assert) {
  const user = getOrCreateUser(undefined, undefined, undefined, undefined);

  assert.equal(user, FAIL);
});

// // uid, username, avatar, store
// test('arguments are valid', function(assert) {
//   const user = getOrCreateUser(
//     'fake_UID',
//     'John Doe',
//     'fake.com/profile_image.png',
//
//     // this should be store
//     'store'
//   );
//   // assert.equal(user, Status.FAIL);
// });
