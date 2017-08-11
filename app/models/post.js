import DS from 'ember-data';
import Ember from 'ember';
import PostValidations from '../mixins/validations/post';

const {
  Model,
  belongsTo,
  hasMany,
  attr
} = DS;

const {
  computed
} = Ember;

export default Model.extend(PostValidations, {
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
