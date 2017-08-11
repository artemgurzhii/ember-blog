import Ember from 'ember';
import AuthenticatedOnlyMixin from 'ember-blog/mixins/authenticated-only';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticated only');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuthenticatedOnlyObject = Ember.Object.extend(AuthenticatedOnlyMixin);
  let subject = AuthenticatedOnlyObject.create();
  assert.ok(subject);
});
