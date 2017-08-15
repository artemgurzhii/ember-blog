import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';
import { login } from 'ember-blog/tests/helpers/torii';

moduleForAcceptance('Acceptance | creating valid post');

const [title, body] = ['hello', 'world'];

test('Post is invalid', function(assert) {

  login(this.application);

  visit('/posts/new');

  fillIn('.post-title', title);

  click("button[type='submit']");

  andThen(() => {
    assert.equal(currentRouteName(), 'posts.new');
    assert.equal($("button[type='submit']").prop('disabled'), true);
  });
});

// test('Post is valid', function(assert) {
//   login(this.application);
//
//   visit('/posts/new');
//
//   fillIn('.post-title', title);
//   fillIn('textarea.post-body', body);
//
//   click("button[type='submit']");
//
//   andThen(() => {
//     assert.equal(currentRouteName(), 'posts.show');
//     assert.equal($('.post-title').text(), title);
//     assert.equal($('.post-body').text(), body);
//   });
// });
