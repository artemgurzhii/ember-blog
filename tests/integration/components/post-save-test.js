import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  RSVP,
  Helper
} = Ember;

moduleForComponent('post-save', 'Integration | Component | post save', {
  integration: true,

  beforeEach() {
    this.container
      .registry
      .registrations['helper:route-action'] = Helper.helper(arg => this.routeActions[arg]);

    this.routeActions = {
      doSomething(arg) {
        return RSVP.resolve({arg});
      },
    };
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{post-save}}`);

  assert.ok(this.$().text().trim().includes('Title*'));
  assert.ok(this.$().text().trim().includes('Body*'));
});
