'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceEventUserSchema extends Schema {
  up () {
    this.create('space_event_users', (table) => {
      table.integer('space_event_id').unsigned().index()
      table.foreign('space_event_id').references('id').inTable('space_events')
      table.integer('user_id').unsigned().index()
      table.foreign('user_id').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('space_event_users')
  }
}

module.exports = SpaceEventUserSchema
