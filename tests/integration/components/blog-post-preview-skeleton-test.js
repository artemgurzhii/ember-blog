import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-post-preview-skeleton', 'Integration | Component | blog post preview skeleton', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-post-preview-skeleton}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#blog-post-preview-skeleton}}
      template block text
    {{/blog-post-preview-skeleton}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
