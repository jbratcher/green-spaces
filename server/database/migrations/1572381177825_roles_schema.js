'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolesSchema extends Schema {
  up () {
    this.create('roles', (table) => {
      table.increments()
      table.string('role_name')
      table.timestamps()
    })
  }

  down () {
    this.drop('roles')
  }

  users () {
    return this.hasMany('App/Models/User')
  }

}

module.exports = RolesSchema
