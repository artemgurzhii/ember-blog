import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['loading-indicator-wrapper'],
  classNameBindings: ['center:align-center'],
  center: true
});
