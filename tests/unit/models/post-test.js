import { moduleForModel, test } from 'ember-qunit';

const {
  get
} = Ember;

moduleForModel('post', 'Unit | Model | post', {
  needs: []
});

test('it exists', function(assert) {
  const model = this.subject({
    body: 'hello'
  });
  const createdAt = get(model, 'created_at');
  const image = get(model, 'image');
  const url = new URL(image);

  assert.equal(Ember.typeOf(createdAt), 'date');
  assert.equal(url.search.match(/\?image=\d{1,4}/), true);
});
