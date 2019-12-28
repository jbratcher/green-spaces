'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SpaceEvent extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/SoftDeletes')
  }

  space () {
    return this.hasOne('App/Models/Space')
  }

  creator() {
    return this.belongsTo('App/Models/User', 'space_event_id', 'creator_id')
  }

  attendees() {
    return this.belongsToMany('App/Models/User', 'space_event_id', 'attendee_id')
  }

}

module.exports = SpaceEvent
