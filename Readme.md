# GreenSpaces

### Crowd-sourced tree planting for climate control

GreenSpaces is an event management system for planting trees in public and private
spaces that connects event, spaces, and volunteers.

Help create more green space in your community by donating spaces and volunteering for planting events to combat climate change by reducing carbon dioxide from the air.

Built with AdonisJS, NuxtJS, and Vuetify.

Current Features:
* User registration and login
* Calendar of volunteer events
* CRUD operations for calendar events for logged in users
* Add/remove attendees for events
* List attendees by avatar and name
* List number of attendees for event
* User profile pages
* Event information pages

Getting Started
* git clone the repo
* cd server and npm install
* cp .env.example .env and add db info to .env
* cd ../client and npm install
* run adonis serve --dev from server folder
* run npm dev from client folder

Future Features:
* More details for events
* list of available spaces to create and manage events
* Entire donate section
* Make monetary donations
* list donor spaces for tree planting
* benefits to donors (free trees by volunteering space to plant)
* earmark monetary donations for spaces or tree types

Known bugs:
* Page refresh redirects to homepage (vuex router)