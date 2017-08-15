import states from 'ember-blog/utils/states';
import { module, test } from 'qunit';

module('Unit | Utility | states');

test('it works', function(assert) {
  let result = states();
  assert.ok(result);
});
