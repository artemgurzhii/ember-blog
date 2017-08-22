import getOrCreateUser from 'ember-blog/utils/get-or-create-user';
import { module, test } from 'qunit';

module('Unit | Utility | get or create user');

test('it works', function(assert) {
  let result = getOrCreateUser();
  alert(result);
  assert.ok(result);
});
