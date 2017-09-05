import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import CommentValidations from '../mixins/validations/comment';
import {
  belongsTo
} from 'ember-decorators/data';

export default Model.extend(CommentValidations, {
  body: attr('string'),

  created_at: attr('date', {
    defaultValue() {
      return new Date();
    }
  }),

  @belongsTo user: null,
  @belongsTo post: null,
});
