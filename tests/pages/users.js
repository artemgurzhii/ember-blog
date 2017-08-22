import {
  create,
  visitable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/users'),
  visitUser: clickable('.user-profile a'),
});
