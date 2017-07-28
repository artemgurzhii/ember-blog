import Ember from 'ember';
const { get } = Ember;

export default Ember.Component.extend({
  actions: {
    signOut() {
      get(this, 'session').close();
    }
  }
});
