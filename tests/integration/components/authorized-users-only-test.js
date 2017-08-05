import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('authorized-users-only', 'Integration | Component | authorized users only', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{authorized-users-only}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#authorized-users-only}}
      template block text
    {{/authorized-users-only}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
