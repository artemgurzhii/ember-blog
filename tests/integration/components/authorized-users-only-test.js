import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('authorized-users-only', 'Integration | Component | authorized users only', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#authorized-users-only}}
      template block text
    {{/authorized-users-only}}
  `);

  assert.equal(this.$().text().trim(), '');

  this.set('session', {
    isAuthenticated: true
  });

  // Template block usage:
  this.render(hbs`
    {{#authorized-users-only session=session}}
      template block text
    {{/authorized-users-only}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
