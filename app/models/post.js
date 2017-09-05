import Ember from 'ember';
import PostValidations from '../mixins/validations/post';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  or,
  notEmpty
} from 'ember-decorators/object/computed';

import {
  readOnly
} from 'ember-decorators/object';

import {
  belongsTo,
  hasMany
} from 'ember-decorators/data';

const {
  generateGuid
} = Ember;

export default Model.extend(PostValidations, {
  title: attr('string'),
  body: attr('string'),

  image: attr('string', {

    /**
     * @description Generate uniq ID, drop 'ember' part to use it as image number
     */
    defaultValue() {
      let guid = generateGuid();
      const number = guid.replace('ember', '');

      while (guid > 700) {
        guid -= Math.floor(Math.random() * 100);
      }

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

  // Relationships
  @hasMany category: null,
  @hasMany tag: null,
  @hasMany comment: null,
  @belongsTo user: null,

  // Computed
  @readOnly
  @notEmpty('updated_at') wasEdited: null,

  @readOnly
  @notEmpty('title') isTitlePresent: null,

  @readOnly
  @notEmpty('body') isBodyPresent: null,

  @readOnly
  @or('isTitlePresent', 'isBodyPresent') isPresent: null
});
