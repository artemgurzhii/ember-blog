import { validator, buildValidations } from 'ember-cp-validations';

export default buildValidations({
  title: {
    description: 'Title',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 3,
        max: 100
      })
    ]
  },

  body: {
    description: 'Body',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 3,
        max: 10000
      })
    ]
  },
  user: validator('belongs-to'),
  comment: validator('has-many')
}, {
  debounce: 200
});
