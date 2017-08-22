import { test } from 'qunit';
import moduleForAcceptance from 'ember-blog/tests/helpers/module-for-acceptance';
import postCreate from '../pages/post-create';

moduleForAcceptance('Acceptance | creating valid post');

const [title, body] = ['hello', 'world'];

test('Post is invalid', async function(assert) {

  await postCreate
    .login(this.application)
    .visit()
    .title(title)
    .submit();

  assert.equal(currentRouteName(), 'posts.new');
  assert.equal(postCreate.isDisabled, true, 'Button is not active');
});

test('Post is valid', async function(assert) {
  await postCreate
    .login(this.application)
    .visit()
    .title(title)
    .body(body);

  // NOTE: Not calling 'submit' here because it will create record in the db
  // Find how to test it with embefire
  assert.equal(postCreate.isDisabled, false, 'Button is active');
});
