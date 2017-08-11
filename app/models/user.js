import DS from 'ember-data';

const {
  Model,
  hasMany,
  attr
} = DS;

export default Model.extend({
  uid: attr('string'),
  avatar: attr('string'),

  username: attr('string', {
    defaultValue: 'John Doe'
  }),

  posts: hasMany('post'),
  comments: hasMany('comment')
});
