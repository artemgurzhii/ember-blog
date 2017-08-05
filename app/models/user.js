import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  avatar: DS.attr('string'),

  username: DS.attr('string', {
    defaultValue: 'John Doe'
  }),

  posts: DS.hasMany('post', { async: true }),
  comments: DS.hasMany('comment', { async: true })
});
