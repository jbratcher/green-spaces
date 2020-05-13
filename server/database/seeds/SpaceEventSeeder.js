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
  async run() {

    var model1 = new SpaceEvent();

    model1 = {
      name: "First Friday",
      description: "A first Friday planting event for everyone",
      start: "2020-5-01 13:00",
      end: "2020-5-01 15:00",
      address_name: "Clifton Park",
      full_address: "100 Arlington Avenue, Louisville, KY 40206",
      image_source: "https://picsum.photos/1280/960",
      attendees: [''],
    }

    await Database
      .table('space_events')
      .insert(model1)

    var model2 = new SpaceEvent();

    model2 = {
      name: "Last Friday",
      description: "A last Friday planting event for everyone",
      start: "2020-5-29 13:00",
      end: "2020-5-29 15:00",
      address_name: "Shelby Park",
      full_address: "600 East Oak Street, Louisville, KY 40203",
      image_source: "https://picsum.photos/1280/960",
      attendees: [''],
    }

    await Database
      .table('space_events')
      .insert(model2)

    var model3 = new SpaceEvent();

    model3 = {
      name: "Middle Monday",
      description: "Middle of the month planting event for everyone",
      start: "2020-5-15 13:00",
      end: "2020-5-15 15:00",
      address_name: "Dirt Park",
      full_address: "1 Dirt Alley, Louisville, KY 40203",
      image_source: "https://picsum.photos/1280/960",
      attendees: [''],
    }

    await Database
      .table('space_events')
      .insert(model3)

  }
}

module.exports = SpaceEventSeeder
