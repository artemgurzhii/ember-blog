import Ember from 'ember';
import PostWasModifiedOrCreatedMixin from 'ember-blog/mixins/post/was-modified-or-created';
import { module, test } from 'qunit';

module('Unit | Mixin | post/was modified or created');

// Replace this with your real tests.
test('it works', function(assert) {
  let PostWasModifiedOrCreatedObject = Ember.Object.extend(PostWasModifiedOrCreatedMixin);
  let subject = PostWasModifiedOrCreatedObject.create();
  assert.ok(subject);
});
