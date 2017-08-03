import Ember from 'ember';
import Validations from 'ember-validations';

const TITLE_MIN_LENGTH = 3;
const TITLE_MAX_LENGTH = 100;

const BODY_MIN_LENGTH = 3;
const BODY_MAX_LENGTH = 10000;

export default Ember.Mixin.create(Validations, {
  validations: {
    'post.title': {
      presence: true,
      presence: {
        message: "Post title can't be blank"
      },
      length: {
        minimum: TITLE_MIN_LENGTH,
        maximum: TITLE_MAX_LENGTH,
        messages: {
          tooShort: `Post title is too short, ${TITLE_MIN_LENGTH} characters at least.`,
          tooLong: `Post title is too long, ${TITLE_MAX_LENGTH} characters is limit.`
        }
      }
    },

    'post.body': {
      presence: true,
      presence: {
        message: "Post body can't be blank"
      },
      length: {
        minimum: BODY_MIN_LENGTH,
        maximum: BODY_MAX_LENGTH,
        messages: {
          tooShort: `Post body is too short, ${BODY_MIN_LENGTH} characters at least.`,
          tooLong: `Post body is too long, ${BODY_MAX_LENGTH} characters is limit.`
        }
      }
    }
  }
});
