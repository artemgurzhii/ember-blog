import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';
import main from '../pages/index';

moduleForAcceptance('Acceptance | main page is posts');

test('vising root should redirect to the posts page', async function(assert) {
  await main
    .visit();

  assert.equal(currentRouteName(), 'posts.index');
});
