import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  RSVP,
  Helper
} = Ember;

moduleForComponent('post-form', 'Integration | Component | post form', {
  integration: true,

  beforeEach() {
    this.container
      .registry
      .registrations['helper:route-action'] = Helper.helper(arg => this.routeActions[arg]);

    this.routeActions = {
      save(model, type) {
        return RSVP.resolve({ model, type });
      },
    };
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{post-form model=model type='edit'}}`);

  assert.ok(this.$().text().trim().includes('Title*'));
  assert.ok(this.$().text().trim().includes('Body*'));
});
