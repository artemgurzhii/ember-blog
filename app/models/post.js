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
  get,
  computed
} = Ember;

const {
  notEmpty,
  or,
  gt
} = computed;

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
  user: belongsTo('user'),

  isPresentTitle: notEmpty('title'),
  isPresentBody: notEmpty('body'),
  isPresent: or('isPresentTitle', 'isPresentBody'),

  wasEdited: gt('updated_at', 'created_at'),

  isAllowed: computed('model.firstObject.user.username', 'session.currentUser.username', function(){
    return get(this,'model.firstObject.user.username') === get(this,'session.currentUser.username');
  })
});
