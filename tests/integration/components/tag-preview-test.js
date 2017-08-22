import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tag-preview', 'Integration | Component | tag preview', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{tag-preview}}`);

  assert.equal(this.$().text().trim(), '');
});
