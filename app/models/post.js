import DS from 'ember-data';
import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const {
  Model,
  belongsTo,
  hasMany,
  attr
} = DS;

const {
  computed
} = Ember;

const PostValidation = buildValidations({
  title: {
    description: 'Title',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 3,
        max: 100
      })
    ]
  },

  body: {
    description: 'Body',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 3,
        max: 10000
      })
    ]
  },
  user: validator('belongs-to'),
  comments: validator('has-many')
}, {
  debounce: 200
});

export default Model.extend(PostValidation, {
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

  comments: hasMany('comment', { async: true }),
  user: belongsTo('user', { async: true }),

  isPresentTitle: computed.notEmpty('title'),
  isPresentBody: computed.notEmpty('body'),

  isPresent: computed.or('isPresentTitle', 'isPresentBody'),

  wasEdited: computed.gt('updated_at', 'created_at'),

  isAllowed: computed.equal('model.firstObject.user.username', 'session.currentUser.username')
});
