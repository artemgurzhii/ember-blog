import DS from 'ember-data';
import Ember from 'ember';

const {
  Model,
  belongsTo,
  hasMany,
  attr
} = DS;

const {
  computed
} = Ember;

export default Model.extend({
  title: attr('string'),
  body: attr('string'),

  created_at: attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  updated_at: attr('date', {
    defaultValue: null
  }),

  comments: hasMany('comment'),
  user: belongsTo('user'),

  wasEdited: computed.gt('updated_at', 'created_at'),

  userName: computed.readOnly('user.name'),

  isValidTitle: computed.gte('title.length', 3),
  isValidBody: computed.gte('body.length', 3),

  isValid: computed.and('isValidTitle', 'isValidBody'),
  isInValid: computed.not('isValid'),

  titleIsNotEmpty: computed.notEmpty('title'),
  bodyIsNotEmpty: computed.notEmpty('body'),

  isPresent: computed.or('titleIsNotEmpty', 'bodyIsNotEmpty'),
});
