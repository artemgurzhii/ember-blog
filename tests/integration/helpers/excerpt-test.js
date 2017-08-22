import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  set
} = Ember;

moduleForComponent('excerpt', 'helper:excerpt', {
  integration: true
});

const defaultValue = '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
const doubled = `${defaultValue}${defaultValue}`;

test('with default excerpt slice length', function(assert) {
  set(this, 'inputValue', doubled);

  this.render(hbs`{{excerpt inputValue}}`);

  assert.equal(this.$().text().trim(), defaultValue);
});

test('passing string length', function(assert) {
  set(this, 'inputValue', '1234');

  this.render(hbs`{{excerpt inputValue 1}}`);

  assert.equal(this.$().text().trim(), '1');
});
