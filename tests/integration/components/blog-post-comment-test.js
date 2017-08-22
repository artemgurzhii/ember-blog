import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-post-comment', 'Integration | Component | blog post comment', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{blog-post-comment}}`);

  assert.equal(this.$().text().trim(), '');
});
