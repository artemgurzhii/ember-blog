import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['loading-indicator-wrapper'],
  classNameBindings: ['center:align-center'],
  center: true
});
