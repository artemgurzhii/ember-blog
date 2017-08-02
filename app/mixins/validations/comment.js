import Ember from 'ember';
import Validations from 'ember-validations';

const BODY_MIN_LENGTH = 3;
const BODY_MAX_LENGTH = 10000;

export default Ember.Mixin.create(Validations, {
  validations: {
    'post.comment.body': {
      presence: true,
      length: {
        minimum: BODY_MIN_LENGTH,
        maximum: BODY_MAX_LENGTH,
        messages: {
          tooShort: `Comment body is too short, ${BODY_MIN_LENGTH} characters at least.`,
          tooLong: `Comment body is too long, ${BODY_MAX_LENGTH} characters is limit.`
        }
      }
    }
  }
});
