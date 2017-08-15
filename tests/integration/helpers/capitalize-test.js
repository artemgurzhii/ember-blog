import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('capitalize', 'helper:capitalize', {
  integration: true
});

const given = 'hello world';
const expected = 'Hello world';

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', given);

  this.render(hbs`{{capitalize inputValue}}`);

  assert.equal(this.$().text().trim(), expected);
});
