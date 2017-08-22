import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  set,
  RSVP,
  Helper
} = Ember;

moduleForComponent('navigation-bar', 'Integration | Component | navigation bar', {
  integration: true,

  beforeEach() {
    this.container
      .registry
      .registrations['helper:route-action'] = Helper.helper(arg => this.routeActions[arg]);

    this.routeActions = {
      login(arg) {
        return RSVP.resolve({arg});
      },

      logout(arg) {
        return RSVP.resolve({arg});
      },
    };
  }
});

test('show login button is user is not signed in', function(assert) {
  set(this, 'session', {
    isAuthenticated: true
  });
  this.render(hbs`{{navigation-bar session=session}}`);

  assert.ok(!this.$().text().trim().includes('Login'));
  assert.ok(this.$().text().trim().includes('Logout'));
});

test('show Logout button is user is not signed in', function(assert) {
  set(this, 'session', {
    isAuthenticated: false
  });
  this.render(hbs`{{navigation-bar session=session}}`);

  assert.ok(this.$().text().trim().includes('Login'));
  assert.ok(!this.$().text().trim().includes('Logout'));
});
