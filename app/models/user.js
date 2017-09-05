import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  hasMany
} from 'ember-decorators/data';

export default Model.extend({
  uid: attr('string'),
  avatar: attr('string'),

  username: attr('string', {
    defaultValue: 'John Doe'
  }),

  @hasMany posts: null,
  @hasMany comments: null
});
