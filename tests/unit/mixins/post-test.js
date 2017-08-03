import Ember from 'ember';
import PostMixin from 'ember-blog/mixins/post';
import { module, test } from 'qunit';

module('Unit | Mixin | post');

// Replace this with your real tests.
test('it works', function(assert) {
  let PostObject = Ember.Object.extend(PostMixin);
  let subject = PostObject.create();
  assert.ok(subject);
});
