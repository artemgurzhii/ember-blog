import DS from 'ember-data';
import Ember from 'ember';

const { get } = Ember;

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  created_at: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  edited_at: DS.attr('date', {
    defaultValue: null
  }),
  
  wasEdited: Ember.computed.gt('edited_at', 'created_at'),

  author: DS.belongsTo('author'),
  authorName: Ember.computed.readOnly('author.name'),

  isValidTitle: Ember.computed.gte('title.length', 3),
  isValidBody: Ember.computed.gte('body.length', 3),

  isValid: Ember.computed.and('isValidTitle', 'isValidBody'),
  isInValid: Ember.computed.not('isValid')
});
