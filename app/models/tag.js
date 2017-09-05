import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  belongsTo
} from 'ember-decorators/data';

export default Model.extend({
  name: attr('string'),

  @belongsTo post: null
});
