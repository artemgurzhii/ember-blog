import Ember from 'ember';
import PostValidations from '../mixins/validations/post';

const { get } = Ember;

export default Ember.Component.extend(PostValidations, {
  actions: {
    save(model) {
      this.validate()
        .then(this._success.bind(this, model))
        .catch(this._error.bind(this));
    }
  },

  _success(model) {
    this.sendAction('save', model);
  },

  _error() {
    Ember.Logger.warn(get(this, 'errors'));
  }
});
