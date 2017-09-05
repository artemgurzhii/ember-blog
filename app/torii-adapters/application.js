import { service } from 'ember-decorators/service';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  @service firebase: null
});
