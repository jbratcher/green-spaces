'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SpaceEvent extends Model {

  users () {
    return this.hasMany('App/Models/User')
  }

  space () {
    return this.hasOne('App/Models/Space')
  }

}

module.exports = SpaceEvent
