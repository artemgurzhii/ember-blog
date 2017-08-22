import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-post', 'Integration | Component | blog post', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{blog-post}}`);

  assert.equal(this.$().text().trim(), '');
});
