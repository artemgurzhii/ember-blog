import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-comments', 'Integration | Component | all comments', {
  integration: true
});

test('no comments were passed', function(assert) {
  this.render(hbs`{{all-comments}}`);

  assert.equal(this.$().text().trim(), `No Comments were found\n  Create your first comment!!!`);
});
