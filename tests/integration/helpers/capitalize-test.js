import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  set
} = Ember;

moduleForComponent('capitalize', 'helper:capitalize', {
  integration: true
});

const given = 'hello world';
const expected = 'Hello world';

test('capitalize string', function(assert) {
  set(this, 'inputValue', given);

  this.render(hbs`{{capitalize inputValue}}`);

  assert.equal(this.$().text().trim(), expected);
});
