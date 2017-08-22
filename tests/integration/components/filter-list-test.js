import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-list', 'Integration | Component | filter list', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{filter-list}}`);

  assert.equal(this.$().text().trim(), '');
});
