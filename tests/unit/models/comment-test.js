import { moduleForModel, test } from 'ember-qunit';

const {
  get
} = Ember;

moduleForModel('comment', 'Unit | Model | comment', {
  needs: ['model:user', 'model:post', 'validator:presence', 'validator:length', 'validator:belongs-to']
});

test('it exists', function(assert) {
  const model = this.subject({
    body: 'hello'
  });
  const createdAt = get(model, 'created_at');

  assert.equal(Ember.typeOf(createdAt), 'date');
});
