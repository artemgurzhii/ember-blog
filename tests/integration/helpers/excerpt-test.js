import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('excerpt', 'helper:excerpt', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{excerpt inputValue 1}}`);
  assert.equal(this.$().text().trim(), '1');

  const defaultValue = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
  const doubled = `${defaultValue}${defaultValue}`;

  // Testing default excerpt slice length
  this.set('inputValue', doubled);
  this.render(hbs`{{excerpt inputValue}}`);
  assert.equal(this.$().text().trim(), defaultValue);
});
