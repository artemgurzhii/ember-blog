import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-profile', 'Integration | Component | user profile', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{user-profile}}`);

  assert.equal(this.$().text().trim(), '');
});
