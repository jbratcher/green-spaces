'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceEventsSchema extends Schema {
  up () {
    this.create('space_events', (table) => {
      table.increments()
      table.string('name')
      table.text('description')
      table.string('start')
      table.timestamps()
    })
  }

  down () {
    this.drop('space_events')
  }
}

module.exports = SpaceEventsSchema
