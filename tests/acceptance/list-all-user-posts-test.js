import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';
import users from '../pages/users';

moduleForAcceptance('Acceptance | list all user posts');

test('visiting /users/:{user_id}', async function(assert) {
  await users
    .visit()
    .visitUser();

  assert.equal(currentRouteName(), 'users.show');
});
