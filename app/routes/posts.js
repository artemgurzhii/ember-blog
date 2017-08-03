import Ember from 'ember';
import PostActions from '../mixins/post';

const {
  Route
} = Ember;

export default Route.extend(PostActions, {
});
