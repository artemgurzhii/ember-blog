import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-post-preview-skeleton', 'Integration | Component | blog post preview skeleton', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{blog-post-preview-skeleton}}`);

  assert.equal(this.$().text().trim(), '');
});
