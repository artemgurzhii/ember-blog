import DS from 'ember-data';
import CommentValidations from '../mixins/validations/comment';

const {
  attr,
  Model,
  belongsTo
} = DS;

export default Model.extend(CommentValidations, {
  body: attr('string'),
  user: belongsTo('user', { async: true }),
  post: belongsTo('post', { async: true })
});
