'use strict'

const Space = use('App/Models/Space');
const AuthorizationService = use('App/Service/AuthorizationService');

class SpaceController {

  async index({ auth }) {
    const user = await auth.getUser();
    return await user.spaces().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { title } = request.all();
    const space = new Space();
    space.fill({
      title,
    });
    await user.spaces().save(space);
    return space;
  }

  async destroy({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const space = await Space.find(id);
    AuthorizationService.verifyPermission(space, user);
    await space.delete();
  return space;
  }

  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const space = await Space.find(id);
    AuthorizationService.verifyPermission(space, user);
    space.merge(request.only('title'));
    await space.save();
    return space;
  }

}

module.exports = SpaceController
