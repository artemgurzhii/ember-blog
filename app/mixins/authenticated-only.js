import Ember from 'ember';

const {
  get,
  isEqual
} = Ember;

export default Ember.Mixin.create({
  session: Ember.inject.service('session'),

  beforeModel() {
    const isAuthenticated = get(this, 'session.isAuthenticated');

    if (isEqual(isAuthenticated, false)) {
      this.transitionTo('posts');
    }
  }
});
