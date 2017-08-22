import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('validated-input', 'Integration | Component | validated input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{validated-input}}`);

  assert.equal(this.$().text().trim(), '');
});
