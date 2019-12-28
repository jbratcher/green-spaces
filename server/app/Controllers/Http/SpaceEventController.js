'use strict'

const SpaceEvent = use('App/Models/SpaceEvent');

class SpaceEventController {

  async index() {
    return await SpaceEvent.all();
  }

  async show({ params }) {
    const { id } = params;
    return await SpaceEvent.find(id);
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { name, description, start, end, address_name, full_address, image_source } = request.all();
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
      attendees: '',
    });
    await user.spaceEventsCreated().save(spaceEvent);
    return spaceEvent;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    spaceEvent.merge(request.all('name', 'description', 'start', 'end', 'address_name', 'full_address', 'image_source', 'attendees'));
    await spaceEvent.save();
    return spaceEvent;
  }

  async updateAttending({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const { rsvp } = request.all();
    const spaceEvent = await SpaceEvent.find(id);
    if (rsvp) {
      await spaceEvent.attendees().save(user);
    } else {
      await spaceEvent.attendees().delete(user);
    }
  }

  async getAttendees({ request, params}) {
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    return await spaceEvent.attendees().fetch();
  }

  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    await spaceEvent.delete();
    return spaceEvent;
  }

}

module.exports = SpaceEventController
