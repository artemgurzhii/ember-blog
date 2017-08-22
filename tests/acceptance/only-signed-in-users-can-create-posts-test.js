import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | only signed in users can create posts');

test('visiting /posts/new', async function(assert) {
  await visit('/posts/new');

  assert.equal(currentRouteName(), 'posts.index');
});
