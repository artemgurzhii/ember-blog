import { formatDate } from 'ember-blog/helpers/format-date';
import { module, test } from 'qunit';

module('Unit | Helper | format date');

// Replace this with your real tests.
test('transform JS date to normal ', function(assert) {
  const date = new Date(2014, 3, 2, 15, 16, 17);
  const result = formatDate([date]);

  assert.equal(result, 'Wed Apr 02 2014 15:16:17');
});

test('should do nothing if date was not passed', function(assert) {
  const result = formatDate();
  assert.equal(result, undefined);
});
