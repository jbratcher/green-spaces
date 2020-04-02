'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Users Factory

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.email(),
    full_name: faker.name(),
    email: faker.email(),
    password: faker.password(),
    profile_image_source: `https://i.pravatar.cc/150?u=${faker.email()}`,
  }
})

// Roles Factory

Factory.blueprint('App/Models/Role', async (faker, i, data) => {
  return {
    role_name: data.role_name
  }
})

// Spaces Factory

Factory.blueprint('App/Models/Space', async (faker) => {
  return {
    name: faker.street(),
    full_address: faker.address(),
    description: faker.sentence(3),
  }
})

// TODO

// SpaceEvents Factory

// Factory.blueprint('App/Models/SpaceEvent', async (faker) => {
//   return {
//     name: faker.name(),
//     description: faker.sentence(3),
//     start: faker.date(),
//     end: faker.date(),
//     address_name: faker.named_location(),
//     full_address: faker.address(),
//     image_source: faker.URL(),
//   }
// })
