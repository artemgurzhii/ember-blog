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
    this.route('edit', { path: '/:post_id/edit' });
    this.route('show', { path: '/:post_id' }, function() {
      this.route('comments', { path: '/' });
    });
    this.route('search');
  });
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
  });
  this.route('tags', function() {
    this.route('show', { path: '/:tag_id' });
  });
  this.route('categories', function() {
    this.route('show', { path: '/:category_id' });
  });
  this.route('admin', function() {
    this.route('tags');
  });
});

export default Router;
