import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | creating valid post');

const [title, body] = ['hello', 'world'];

test('visiting /posts/new', function(assert) {
  visit('/posts/new');

  fillIn('.post-title', title);
  fillIn('.post-body', body);

  click("button[type='submit']");

  andThen(() => {
    assert.equal(currentRouteName(), 'posts.show');
    assert.equal($('.post-title').text(), title);
    assert.equal($('.post-body').text(), body);
  });
});
