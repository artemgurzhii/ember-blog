import DS from 'ember-data';
import Ember from 'ember';
import PostValidations from '../mixins/validations/post';

const {
  attr,
  Model,
  hasMany,
  belongsTo
} = DS;

const {
  computed,
  generateGuid
} = Ember;

const {
  or,
  gt,
  notEmpty
} = computed;

export default Model.extend(PostValidations, {
  title: attr('string'),
  body: attr('string'),

  image: attr('string', {

    /**
     * @description Generate uniq ID, drop 'ember' part to use it as image number
     */
    defaultValue() {
      const guid = generateGuid();
      const number = guid.replace('ember', '');

      return `https://unsplash.it/200/200/?image=${number}`;
    }
  }),

  created_at: attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  updated_at: attr('date', {
    defaultValue: null
  }),

  category: hasMany('category', {
    async: true
  }),

  tag: hasMany('tag', {
    async: true
  }),

  comments: hasMany('comment', {
    async: true
  }),

  user: belongsTo('user', {
    async: true
  }),

  isPresentTitle: notEmpty('title'),
  isPresentBody: notEmpty('body'),
  isPresent: or('isPresentTitle', 'isPresentBody'),

  wasEdited: gt('updated_at', 'created_at')
});
