'use strict'

const SpaceEvent = use('App/Models/SpaceEvent');

class SpaceEventController {

  async index() {
    return await SpaceEvent.all();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { name, description, start } = request.all();
    const spaceEvent = new SpaceEvent();
    spaceEvent.fill({
      name,
      description,
      start,
    });
    await user.spaceEvents().save(spaceEvent);
    return spaceEvent;
  }

  async destroy({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    AuthorizationService.verifyPermission(spaceEvent, user);
    await spaceEvent.delete();
    return spaceEvent;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const spaceEvent = await SpaceEvent.find(id);
    AuthorizationService.verifyPermission(spaceEvent, user);
    spaceEvent.merge(request.only('name'));
    await spaceEvent.save();
    return spaceEvent;
  }

}

module.exports = SpaceEventController
