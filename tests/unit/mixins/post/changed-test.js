import Ember from 'ember';
import PostChangedMixin from 'ember-blog/mixins/post/changed';
import { module, test } from 'qunit';

module('Unit | Mixin | post/changed');

// Replace this with your real tests.
test('it works', function(assert) {
  let PostChangedObject = Ember.Object.extend(PostChangedMixin);
  let subject = PostChangedObject.create();
  assert.ok(subject);
});
