# GreenSpaces

### Crowd-sourced tree planting for climate control

Green Spaces provides an all-in-one platform for combating climate change by planting trees to reduce carbon dioxide from the air.

Built with AdonisJS, NuxtJS, and Vuetify

Current Features:
* User registration and login
* Calendar of volunteer events
* CRUD operations for calendar events for logged in users


Getting Started
* git clone the repo
* cd server and npm install
* cp .env.example .env and add db info to .env
* cd ../client and npm install
* run adonis serve --dev from server folder
* run npm dev from client folder

Future Features:
* More details for events
    * spaces available
    * event times
    * Number of RSVPs
    * Volunteer list
* Volunteer RSVP for events
* Entire donate section
    * Make monetary donations
    * list donor spaces for tree planting
    * benefits to donors (free trees by volunteering space to plant)
    * earmark monetary donations for spaces or tree types

Known bugs:
* No event emission from newly created events (must refresh page)
* Page refresh redirects to homepage