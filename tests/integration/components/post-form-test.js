import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-form', 'Integration | Component | post form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{post-form}}`);

  assert.ok(this.$().text().trim().includes('Title*'));
  assert.ok(this.$().text().trim().includes('Body*'));
});
