import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-posts', 'Integration | Component | all posts', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{all-posts}}`);

  assert.equal(this.$().text().trim(), `No Posts were found\n  Create your first post!!! - Create Post`);
});
