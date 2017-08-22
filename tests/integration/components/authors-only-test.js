import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const {
  set,
  setProperties
} = Ember;

moduleForComponent('authors-only', 'Integration | Component | authors only', {
  integration: true
});

test('Should not yield as user does not exist', function(assert) {
  this.render(hbs`
    {{#authors-only session=session model=model}}
      template block text
    {{/authors-only}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('session doesnt exist', function(assert) {
  set(this, 'model', {
    user: {
      username: 'hello'
    }
  });

  // Template block usage:
  this.render(hbs`
    {{#authors-only session=session model=model}}
      template block text
    {{/authors-only}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('all ok', function(assert) {
  setProperties(this, {
    session: {
      currentUser: {
        displayName: 'hello'
      },
      isAuthenticated: true
    },
    model: {
      user: {
        username: 'hello'
      }
    }
  });

  // Template block usage:
  this.render(hbs`
    {{#authors-only session=session model=model}}
      template block text
    {{/authors-only}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
