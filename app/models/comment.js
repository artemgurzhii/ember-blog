import DS from 'ember-data';

const {
  Model,
  belongsTo,
  attr
} = DS;

export default Model.extend({
  body: attr('string'),
  user: belongsTo('user'),
  post: belongsTo('post')
});
