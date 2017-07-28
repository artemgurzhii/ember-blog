import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  created_at: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  updated_at: DS.attr('date', {
    defaultValue: null
  }),

  author: DS.belongsTo('author'),

  wasEdited: Ember.computed.gt('updated_at', 'created_at'),

  authorName: Ember.computed.readOnly('author.name'),

  isValidTitle: Ember.computed.gte('title.length', 3),
  isValidBody: Ember.computed.gte('body.length', 3),

  isValid: Ember.computed.and('isValidTitle', 'isValidBody'),
  isInValid: Ember.computed.not('isValid')
});
