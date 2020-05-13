'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceEventUserSchema extends Schema {
  up() {
    this.create('space_event_user', (table) => {
      table.increments()
      table.integer('creator_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.integer('attendee_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.integer('space_event_id').unsigned().references('id').inTable('space_events').onDelete('cascade')
    })
  }

  down() {
    this.drop('space_event_user')
  }
}

module.exports = SpaceEventUserSchema
