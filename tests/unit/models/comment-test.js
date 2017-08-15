import { moduleForModel, test } from 'ember-qunit';

moduleForModel('comment', 'Unit | Model | comment', {
  needs: ['model:user', 'model:post']
});

test('it exists', function(assert) {
  const model = this.subject({
    body: 'hello'
  });
  const created_at = model.get('created_at');

  assert.equal(Ember.typeOf(created_at), 'date');
});
