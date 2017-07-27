import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.belongsTo('author'),
  date: DS.attr('date'),

  authorName: Ember.computed.readOnly('author.name'),

  isValidTitle: Ember.computed.gte('title.length', 3),
  isValidBody: Ember.computed.gte('body.length', 3),

  isValid: Ember.computed.and('isValidTitle', 'isValidBody'),

  isInValid: Ember.computed.not('isValid')
});
