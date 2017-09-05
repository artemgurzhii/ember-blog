import isTypeOf from 'ember-blog/utils/is-type-of';
import { module, test } from 'qunit';

module('Unit | Utility | is type of');

test('type is correct', function(assert) {
  const result = isTypeOf('hello', 'string');

  assert.ok(result);
});

test('type is incorrect', function(assert) {
  const result = isTypeOf(123, 'string');

  assert.notOk(result);
});
