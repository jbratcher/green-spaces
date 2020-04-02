'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceEventsSchema extends Schema {
  up () {
    this.create('space_events', (table) => {
      table.increments()
      table.integer('creator_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.string('creator_name').notNullable()
      table.string('name').notNullable()
      table.text('description').nullable()
      table.string('start').notNullable()
      table.string('end').nullable()
      table.string('address_name').notNullable()
      table.string('full_address').notNullable()
      table.string('image_source').nullable()
      table.text('attendees').nullable()
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('space_events')
  }
}

module.exports = SpaceEventsSchema
