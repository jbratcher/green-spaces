'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceEventsSchema extends Schema {
  up () {
    this.create('space_events', (table) => {
      table.increments()

      // user id
      table.integer('user_id').unsigned().index('user_id')
      table.foreign('user_id').references('users.id').onDelete('cascade')

      table.string('name').notNullable()
      table.text('description').nullable()
      table.string('start').notNullable()
      table.string('end').nullable()
      table.string('address_name').notNullable()
      table.string('full_address').notNullable()
      table.string('image_source').nullable()
      table.json('attendees').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('space_events')
  }
}

module.exports = SpaceEventsSchema
