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

export default Model.extend(PostValidations, {
  title: attr('string'),
  body: attr('string'),

  image: attr('string', {
    defaultValue() {
      const guid = Math.floor((Math.random() * 700));

      return `https://unsplash.it/200/200/?image=${guid}`;
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
  @hasMany categories: null,
  @hasMany tags: null,
  @hasMany comments: null,
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
