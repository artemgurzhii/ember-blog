import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const {
  attr,
  Model,
  belongsTo
} = DS;

const PostCommentValidation = buildValidations({
  body: {
    description: 'Body',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 1,
        max: 10000
      })
    ]
  },
  post: validator('belongs-to'),
  user: validator('belongs-to')
}, {
  debounce: 200
});

export default Model.extend(PostCommentValidation, {
  body: attr('string'),
  user: belongsTo('user', { async: true }),
  post: belongsTo('post', { async: true })
});
