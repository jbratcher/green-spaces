'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceEventsSchema extends Schema {
  up () {
    this.create('space_events', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name').notNullable()
      table.text('description')
      table.string('start').notNullable()
      table.string('end')
      table.string('address_name').notNullable()
      table.string('full_address').notNullable()
      table.string('image_source')
      table.timestamps()
    })
  }

  down () {
    this.drop('space_events')
  }
}

module.exports = SpaceEventsSchema
