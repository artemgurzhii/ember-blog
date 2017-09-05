import states, { FAIL, SUCCESS } from 'ember-blog/utils/states';
import { module, test } from 'qunit';

module('Unit | Utility | states');

test('has some basic states', function(assert) {
  assert.ok(FAIL);
  assert.ok(SUCCESS);

  assert.ok(states.FAIL);
  assert.ok(states.SUCCESS);

  assert.equal(states.FAIL, FAIL);
  assert.equal(states.SUCCESS, SUCCESS);
});
