'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceSchema extends Schema {
  up () {
    this.create('spaces', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name').notNullable();
      table.text('full_address')
      table.text('short_address')
      table.string('type')
      table.text('description')
      table.integer('open_spaces')
      table.timestamps()
    })
  }

  down () {
    this.drop('spaces')
  }
}

module.exports = SpaceSchema
