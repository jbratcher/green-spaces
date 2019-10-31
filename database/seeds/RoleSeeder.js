'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class RoleSeeder {
  async run () {

    await Factory
      .model('App/Models/Role')
      .create({ role_name: 'donor' })

    await Factory
      .model('App/Models/Role')
      .create({ role_name: 'volunteer' })

  }
}

module.exports = RoleSeeder
