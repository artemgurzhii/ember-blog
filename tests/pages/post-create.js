import {
  login
} from 'ember-blog/tests/helpers/torii';

import {
  is,
  create,
  fillable,
  visitable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/posts/new'),
  title: fillable('.post-title'),
  body: fillable('textarea.post-body'),

  submit: clickable('button[type="submit"]'),
  isDisabled: is(':disabled', 'button[type="submit"]'),

  login(application) {
    login(application);

    return this;
  }
});
