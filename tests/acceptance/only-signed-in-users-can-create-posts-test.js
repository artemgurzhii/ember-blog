import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';
import postCreate from '../pages/post-create';

moduleForAcceptance('Acceptance | only signed in users can create posts');

test('not signed in user should be redirected from /posts/new to the index page', async function(assert) {
  await postCreate
    .visit();

  assert.equal(currentRouteName(), 'posts.index');
});

test('signed in user should be able to create post', async function(assert) {
  await postCreate
    .login(this.application)
    .visit();

  assert.equal(currentRouteName(), 'posts.new');
});
