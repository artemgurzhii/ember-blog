import getOrCreateUser from 'ember-blog/utils/get-or-create-user';
import { module, test } from 'qunit';

module('Unit | Utility | get or create user');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = getOrCreateUser();
  assert.ok(result);
});
