import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navigation-bar', 'Integration | Component | navigation bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{navigation-bar}}`);

  assert.equal(this.$().text().trim(), '');
});
