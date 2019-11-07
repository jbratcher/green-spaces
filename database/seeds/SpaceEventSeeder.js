'use strict'

/*
|--------------------------------------------------------------------------
| SpaceEventSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const SpaceEvent = use('App/Models/SpaceEvent')

class SpaceEventSeeder {
  async run () {

    var model1 = new SpaceEvent();

    model1 = {
      name: "First Friday",
      start: "2019-11-01",
      description: "A first Friday planting event for everyone",
    }

    await Database
      .table('space_events')
      .insert(model1)

  }
}

module.exports = SpaceEventSeeder
