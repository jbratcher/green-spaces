"use strict";

const User = use("App/Models/User");

class UserController {
  async index() {
    return await User.all();
  }

  async show({ auth }) {
    const user = await auth.getUser();
    return user;
  }

  async getCurrentUser({ auth }) {
    const user = await auth.getUser();
    return user;
  }

  async login({ auth, request }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async logout({ auth }) {
    const user = await auth.getUser();
    const token = await auth.getAuthHeader();
    await user.tokens().where("token", token).update({ is_revoked: true });
    return user;
  }

  async register({ request }) {
    const { email, firstName, lastName, password } = request.all();
    console.log(email, firstName, lastName, password);
    const user = await User.create({
      email,
      full_name: `${firstName} ${lastName}`,
      password,
      profile_image_source: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`,
      username: email,
    });
    return this.login(...arguments);
  }

  async getSpaceEvents({ auth }) {
    const user = await auth.getUser();
    const spaceEvents = await user.spaceEventsAttending().fetch();
    return spaceEvents;
  }
}

module.exports = UserController;
