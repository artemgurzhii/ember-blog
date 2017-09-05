import Ember from 'ember';

import {
  readOnly as readOnlyDecorator
} from 'ember-decorators/object';

import {
  not,
  notEmpty,
  and,
  or
} from 'ember-decorators/object/computed';

const {
  get,
  set,
  computed: {
    alias,
    readOnly
  },
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

  @readOnlyDecorator
  @not('validation.isValidating') notValidating: null,

  @readOnlyDecorator
  @notEmpty('value') hasContent: null,

  @readOnlyDecorator
  @notEmpty('validation.warnings') hasWarnings: null,

  @readOnlyDecorator
  @and('hasContent', 'validation.isTruelyValid') isValid: null,

  @readOnlyDecorator
  @or('showValidations', 'hasContent') shouldDisplayValidations: null,

  @readOnlyDecorator
  @and('notValidating', 'showErrorMessage', 'hasContent', 'validation') showErrorClass: null,

  @readOnlyDecorator
  @and('shouldDisplayValidations', 'validation.isInvalid') showErrorMessage: null,

  @readOnlyDecorator
  @and('shouldDisplayValidations', 'hasWarnings', 'isValid') showWarningMessage: null,

  init() {
    this._super(...arguments);
    const valuePath = get(this, 'valuePath');

    defineProperty(this, 'validation', readOnly(`model.validations.attrs.${valuePath}`));
    defineProperty(this, 'value', alias(`model.${valuePath}`));
  },

  focusOut() {
    this._super(...arguments);
    set(this, 'showValidations', true);
  }
});
