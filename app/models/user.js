import DS from 'ember-data';

const {
  attr,
  Model,
  hasMany
} = DS;

export default Model.extend({
  uid: attr('string'),
  avatar: attr('string'),

  username: attr('string', {
    defaultValue: 'John Doe'
  }),

  posts: hasMany('post', {
    async: true
  }),
  comments: hasMany('comment', {
    async: true
  })
});
