import Ember from 'ember';
import { service } from 'ember-decorators/service';

const {
  get,
  isEqual
} = Ember;

export default Ember.Mixin.create({
  @service session: null,

  beforeModel() {
    const isAuthenticated = get(this, 'session.isAuthenticated');

    if (isEqual(isAuthenticated, false)) {
      this.transitionTo('posts');
    }
  }
});
