import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('authors-only', 'Integration | Component | authors only', {
  integration: true
});

test('it renders', function(assert) {
  // Should not yield as user does not exist
  this.render(hbs`
    {{#authors-only session=session model=model}}
      template block text
    {{/authors-only}}
  `);

  assert.equal(this.$().text().trim(), '');

  this.setProperties({
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
