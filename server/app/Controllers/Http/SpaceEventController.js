"use strict";

const SpaceEvent = use("App/Models/SpaceEvent");
const User = use("App/Models/User");

class SpaceEventController {
  async index() {
    const spaceEvents = await SpaceEvent.all();
    return spaceEvents;
  }

  async show({ params }) {
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    return spaceEvent;
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const {
      name,
      description,
      start,
      end,
      address_name,
      full_address,
      image_source,
    } = request.all();
    const spaceEvent = new SpaceEvent();
    spaceEvent.fill({
      name,
      description,
      start,
      end,
      address_name,
      full_address,
      image_source,
      creator_id: user.id,
      creator_name: user.full_name,
      attendees: "",
    });
    await user.spaceEventsCreated().save(spaceEvent);
    return spaceEvent;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    spaceEvent.merge(request.all());
    await spaceEvent.save();
    return spaceEvent;
  }

  async updateAttending({ request, params }) {
    const { id } = params;
    const { rsvp, user } = request.all();
    const spaceEvent = await SpaceEvent.find(id);
    if (rsvp) {
      await spaceEvent.attendees().attach(user.id);
    } else {
      await spaceEvent.attendees().detach(user.id);
    }
    return spaceEvent.attendees().fetch();
  }

  async getAttendees({ request, params }) {
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    console.log(spaceEvent.name)
    const attendees = await spaceEvent.attendees().fetch();
    if (attendees.rows[0]) {
      console.log(attendees.rows[0].username)
    }
    return attendees.rows;
  }

  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    await spaceEvent.delete();
    return spaceEvent;
  }
}

module.exports = SpaceEventController;
