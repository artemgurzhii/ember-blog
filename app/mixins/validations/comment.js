import { validator, buildValidations } from 'ember-cp-validations';

export default buildValidations({
  body: {
    description: 'Body',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 10,
        max: 10000
      })
    ]
  },
  post: validator('belongs-to'),
  user: validator('belongs-to')
}, {
  debounce: 200
});
