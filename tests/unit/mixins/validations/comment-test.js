import Ember from 'ember';
import ValidationsCommentMixin from 'ember-blog/mixins/validations/comment';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/comment');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsCommentObject = Ember.Object.extend(ValidationsCommentMixin);
  let subject = ValidationsCommentObject.create();
  assert.ok(subject);
});
