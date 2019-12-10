'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SpaceEvent extends Model {

  space () {
    return this.hasOne('App/Models/Space')
  }

  creator() {
    return this.belongsTo('App/Models/User');
  }

  attendees() {
    return this.belongsToMany('App/Models/User');
  }

}

module.exports = SpaceEvent
