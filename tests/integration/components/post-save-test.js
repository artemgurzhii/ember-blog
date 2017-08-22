import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-save', 'Integration | Component | post save', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{post-save}}`);

  assert.ok(this.$().text().trim().includes('Title*'));
  assert.ok(this.$().text().trim().includes('Body*'));
});
