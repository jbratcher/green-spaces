# GreenSpaces

### Crowd-sourced tree planting for climate control

GreenSpaces is an event management system for planting trees in public and private
spaces that connects event, spaces, and volunteers.

Help create more green space in your community by donating spaces and volunteering for planting events to combat climate change by reducing carbon dioxide from the air.

Built with AdonisJS, NuxtJS, and Vuetify.

Features:
* User authentication
* Calendar of volunteer events
* Create/modify/delete events
* RSVP to events
* List event attendees by avatar and name
* List number of attendees for event
* User profile pages
* Event information pages

Getting Started
```
git clone https://github.com/jbratcher/green-spaces
cd server and npm install
cp .env.example .env and add db info to .env
cd ../client and npm install
```

The repo seperates the client and server explicitly and each is contained within its own folder.

To start the API dev server
```
cd /serve
adonis serve --dev from server folder


To start the client server
```
cd /client
npm dev from client folder
```

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