import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';
import users from '../pages/users';

moduleForAcceptance('Acceptance | list all users');

test('visiting /users', async function(assert) {

  await users
    .visit();

  assert.equal(currentRouteName(), 'users.index');
});
