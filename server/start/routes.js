'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');
  Route.get('current-user', 'UserController.getCurrentUser');
  Route.get('users/:id', 'UserController.show');

  Route.get('space-events', 'SpaceEventController.index');
  Route.get('space-events/:id', 'SpaceEventController.show');
  Route.get('space-events/:id/attendees', 'SpaceEventController.getAttendees');
  Route.post('space-events', 'SpaceEventController.create');
  Route.patch('space-events/:id', 'SpaceEventController.update');
  Route.patch('space-events/:id/attending', 'SpaceEventController.updateAttending');
  Route.delete('space-events/:id', 'SpaceEventController.destroy');

})
  .prefix('api');
