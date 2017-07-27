import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {
    defaultValue: ''
  }),
  posts: DS.hasMany('post')
});
