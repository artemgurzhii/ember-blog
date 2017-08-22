import states from 'ember-blog/utils/states';
import { module, test } from 'qunit';

module('Unit | Utility | states');

test('has some basic states', function(assert) {
  assert.ok(states.FAIL);
  assert.ok(states.SUCCESS);
});
