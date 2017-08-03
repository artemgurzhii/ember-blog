import Ember from 'ember';

const {
  get,
  set,
  computed,
  Component,
  defineProperty
} = Ember;

export default Component.extend({
  classNames: ['validated-input'],
  classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
  model: null,
  value: null,
  valuePath: '',
  placeholder: '',
  validation: null,
  showValidations: false,
  didValidate: false,

  notValidating: computed.not('validation.isValidating').readOnly(),
  hasContent: computed.notEmpty('value').readOnly(),
  hasWarnings: computed.notEmpty('validation.warnings').readOnly(),
  isValid: computed.and('hasContent', 'validation.isTruelyValid').readOnly(),
  shouldDisplayValidations: computed.or('showValidations', 'didValidate', 'hasContent').readOnly(),

  showErrorClass: computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly(),
  showErrorMessage: computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly(),
  showWarningMessage: computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly(),

  init() {
    this._super(...arguments);
    const valuePath = get(this, 'valuePath');

    defineProperty(this, 'validation', computed.readOnly(`model.validations.attrs.${valuePath}`));
    defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
  },

  focusOut() {
    this._super(...arguments);
    set(this, 'showValidations', true);
  }
});
