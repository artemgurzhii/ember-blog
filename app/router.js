import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('posts', function() {
    this.route('new');
    this.route('edit', { path: ':post_id/edit' });
    this.route('show', { path: ':post_id' });
  });
  this.route('login');
});

export default Router;
