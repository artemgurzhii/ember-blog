import Ember from 'ember';
import ValidationsPostMixin from 'ember-blog/mixins/validations/post';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/post');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsPostObject = Ember.Object.extend(ValidationsPostMixin);
  let subject = ValidationsPostObject.create();
  assert.ok(subject);
});
