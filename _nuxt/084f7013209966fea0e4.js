(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{329:function(e,t,n){var content=n(364);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("3a15a112",content,!0,{sourceMap:!1})},330:function(e,t,n){var content=n(377);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("7ab2819f",content,!0,{sourceMap:!1})},363:function(e,t,n){"use strict";var r=n(329);n.n(r).a},364:function(e,t,n){var r=n(11);(e.exports=r(!1)).push([e.i,".attendee-list,.event-description{font-size:1.25rem}.attendee-list{color:#000;font-weight:300;margin-bottom:1.5rem}.attendee-list li{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.attendee-list li .v-image{margin-right:1rem}.attendee-list li p{margin-bottom:0}.subtitle{font-size:1.125rem}.update-btn{margin-right:15%}.edit-btn{margin-right:30%}",""])},376:function(e,t,n){"use strict";var r=n(330);n.n(r).a},377:function(e,t,n){var r=n(11);(e.exports=r(!1)).push([e.i,".v-dialog{width:80vw}.v-text-field__slot{height:60px}@media screen and (min-width:768px){.v-dialog{width:50vw}}",""])},400:function(e,t,n){"use strict";n.r(t);n(8),n(6),n(5),n(4),n(7);var r=n(1),c=n(40),o=(n(32),n(190),n(335));n(336);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{datetime:o.Datetime},props:{selectedElement:{type:null,default:null},selectedEvent:{type:Object,default:function(){}},selectedOpen:{type:Boolean,default:!1}},data:function(){return{date:(new Date).toJSON(),endDateTime:(new Date).toJSON(),editMode:!1,startDateTime:(new Date).toJSON(),switch1:!1,valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],descriptionRules:[function(e){return!!e||"Description is required"},function(e){return e&&e.length<=1e3||"Description must be less than 1000 characters"}],addressNameRules:[function(e){return!!e||"Address Name is required"},function(e){return e&&e.length<=1e3||"Address Name must be less than 1000 characters"}],fullAddressRules:[function(e){return!!e||"Full Address is required"},function(e){return e&&e.length<=1e3||"Full Address must be less than 1000 characters"}],imageSourceRules:[function(e){return!!e||"Image Source is required"},function(e){return e&&e.length<=1e3||"Image Source must be less than 1000 characters"}]}},computed:d({},Object(c.d)("spaceEvents",["newSpaceEventName","newSpaceEventDescription","newSpaceEventStart","newSpaceEventEnd","newSpaceEventAddressName","newSpaceEventFullAddress","newSpaceEventImageSource","rsvp","spaceEvents"]),{},Object(c.d)("auth",["user"]),{volunteersCount:function(){return this.selectedEvent.attendees?this.selectedEvent.attendees.length:"0"},eventDate:function(){return new Date(this.selectedEvent.start).toLocaleString()}}),watch:{startDateTime:function(){var e=this.startDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventStart({selectedEvent:this.selectedEvent,start:e})},endDateTime:function(){var e=this.endDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventEnd({selectedEvent:this.selectedEvent,end:e})},selectedEvent:function(){this.startDateTime=this.toISOLocal(new Date(this.selectedEvent.start)),this.endDateTime=this.toISOLocal(new Date(this.selectedEvent.end)),0!==Object.entries(this.selectedEvent).length||this.selectedEvent.constructor!==Object?this.setRsvpByUser({selectedEvent:this.selectedEvent,user:this.user}):console.log("user rsvp not set")}},mounted:function(){var e=this;this.fetchSpaceEvents(),this.spaceEvents.forEach((function(t){return e.fetchSpaceEventAttendees(t)}))},methods:d({},Object(c.b)("spaceEvents",["deleteSpaceEvent","fetchSpaceEvents","fetchSpaceEventAttendees","updateSpaceEvent","updateSpaceEventAttendees"]),{},Object(c.c)("spaceEvents",["setRsvpByUser","setSpaceEvent","setUpdatedSpaceEventName","setUpdatedSpaceEventDescription","setUpdatedSpaceEventStart","setUpdatedSpaceEventEnd","setUpdatedSpaceEventAddressName","setUpdatedSpaceEventFullAddress","setUpdatedSpaceEventImageSource","toggleRsvp"]),{toISOLocal:function(e){var t=function(e){return("0"+e).slice(-2)};return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+("00"+e.getMilliseconds()).slice(-3)+"Z"},toggleUserAttending:function(){this.toggleRsvp(),this.updateSpaceEventAttendees(this.selectedEvent)},cancelEventEdit:function(){this.resetEventForm()},deleteEvent:function(){this.deleteSpaceEvent(this.selectedEvent),this.resetEventForm()},enterEditMode:function(){this.editMode=!0},toggleEditMode:function(){this.editMode=!this.editMode},resetEventForm:function(){this.editMode=!1,this.$emit("toggleOpen",!1)},updateEvent:function(){this.updateSpaceEvent(this.selectedEvent),this.editMode=!1}})},m=(n(363),n(39)),h=n(60),f=n.n(h),E=n(129),S=n(134),w=n(320),y=n(318),_=n(310),O=n(334),D=n(395),C=n(126),x=n(108),N=n(409),T=n(313),j=n(314),A=n(333),k=n(396),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,color:e.selectedEvent.color},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{staticClass:"d-flex flex-column"},[n("v-card-title",{staticClass:"headline primary white--text justify-space-between"},[e.editMode?e._e():n("h2",[e._v("\n            "+e._s(e.selectedEvent.name)+"\n          ")]),e._v(" "),e.editMode?n("h2",[e._v("\n            Edit "+e._s(e.selectedEvent.name)+"\n          ")]):e._e(),e._v(" "),n("v-btn",{attrs:{color:"primary darken-2",fab:""},on:{click:e.cancelEventEdit}},[n("v-icon",[e._v("\n              mdi-close\n            ")])],1)],1),e._v(" "),e.editMode?e._e():n("v-container",{staticClass:"d-flex flex-column justify-space-evenly"},[n("v-card-text",{staticClass:"py-0",domProps:{textContent:e._s(e.eventDate)}}),e._v(" "),n("v-card-text",{staticClass:"event-description",domProps:{textContent:e._s(e.selectedEvent.description)}}),e._v(" "),n("v-card-text",{staticClass:"subtitle"},[e._v("\n            Volunteers: "+e._s(e.volunteersCount)+"\n          ")]),e._v(" "),n("v-card-text",[n("ul",{staticClass:"attendee-list"},e._l(e.selectedEvent.attendees,(function(t){return n("li",{key:t.id},[n("v-avatar",{attrs:{size:"32"}},[n("v-img",{attrs:{src:t.profile_image_source}})],1),e._v(" "),n("p",[e._v(e._s(t.full_name))])],1)})),0)])],1),e._v(" "),e.editMode?n("v-container",[n("v-text-field",{attrs:{value:e.selectedEvent.name,counter:50,rules:e.nameRules,label:"Name",required:""},on:{input:function(t){return e.setUpdatedSpaceEventName({selectedEvent:e.selectedEvent,name:t})}}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.description,rules:e.descriptionRules,counter:1e3,label:"Description",name:"Description","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventDescription({selectedEvent:e.selectedEvent,description:t})}}}),e._v(" "),n("datetime",{attrs:{type:"datetime","value-zone":"local",zone:"local","use12-hour":"","minute-step":"15",color:"primary",required:""},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}}),e._v(" "),n("datetime",{attrs:{type:"datetime","value-zone":"local",zone:"local","use12-hour":"","minute-step":"15",color:"primary"},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.address_name,rules:e.addressNameRules,counter:1e3,label:"Address Name",name:"AddressName","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventAddressName({selectedEvent:e.selectedEvent,addressName:t})}}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.full_address,rules:e.fullAddressRules,counter:1e3,label:"Full Address",name:"FullAddress","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventFullAddress({selectedEvent:e.selectedEvent,fullAddress:t})}}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.image_source,rules:e.imageSourceRules,counter:1e3,label:"Image Source",name:"ImageSource","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventImageSource({selectedEvent:e.selectedEvent,image_source:t})}}})],1):e._e(),e._v(" "),e.user.id===e.selectedEvent.creator_id?n("v-divider"):e._e(),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{to:"/events/"+e.selectedEvent.id,color:"primary lighten-1",dark:"",fab:"",absolute:"",bottom:"",left:"",nuxt:""}},[n("v-icon",[e._v("\n              mdi-dots-horizontal\n            ")])],1),e._v(" "),e.user.id===e.selectedEvent.creator_id?n("v-btn",{staticClass:"edit-btn",attrs:{color:e.editMode?"warning":"secondary",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.toggleEditMode}},[n("v-icon",[e._v("\n              "+e._s(e.editMode?"mdi-pencil-off":"mdi-pencil")+"\n            ")])],1):e._e(),e._v(" "),e.editMode?n("v-btn",{staticClass:"update-btn",attrs:{color:"primary darken-2",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.updateEvent}},[n("v-icon",[e._v("\n              mdi-content-save\n            ")])],1):e._e(),e._v(" "),e.editMode?n("v-btn",{staticClass:"delete-btn",attrs:{color:"error",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.deleteEvent}},[n("v-icon",[e._v("\n              mdi-trash-can\n            ")])],1):e._e(),e._v(" "),e.editMode?e._e():n("v-btn",{attrs:{color:e.rsvp?"warning":"primary",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.toggleUserAttending}},[n("v-icon",[e._v("\n              "+e._s(e.rsvp?"mdi-account-minus":"mdi-account-plus")+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null),V=component.exports;function M(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}f()(component,{VAvatar:E.a,VBtn:S.a,VCard:w.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VCol:_.a,VContainer:O.a,VDivider:D.a,VIcon:C.a,VImg:x.a,VMenu:N.a,VRow:T.a,VSpacer:j.a,VTextField:A.a,VTextarea:k.a});var I={components:{SelectedEventModal:V},data:function(){return{date:(new Date).toJSON(),startDateTime:(new Date).toJSON(),endDateTime:(new Date).toJSON(),editMode:!1,end:null,focus:(new Date).toISOString().substr(0,10),start:null,selectedElement:null,selectedEvent:{},selectedOpen:!1,today:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],descriptionRules:[function(e){return!!e||"Description is required"},function(e){return e&&e.length<=1e3||"Description must be less than 1000 characters"}],addressNameRules:[function(e){return!!e||"Address Name is required"},function(e){return e&&e.length<=1e3||"Address Name must be less than 1000 characters"}],fullAddressRules:[function(e){return!!e||"Full Address is required"},function(e){return e&&e.length<=1e3||"Full Address must be less than 1000 characters"}],imageSourceRules:[function(e){return!!e||"Image Source is required"},function(e){return e&&e.length<=1e3||"Image Source must be less than 1000 characters"}]}},computed:F({},Object(c.d)("spaceEvents",["newSpaceEventName","newSpaceEventDescription","newSpaceEventStart","newSpaceEventEnd","newSpaceEventAddressName","newSpaceEventFullAddress","newSpaceEventImageSource","spaceEvents"]),{},Object(c.d)("auth",["isLoggedIn","user"]),{title:function(){var e=this.start,t=this.end;if(!e||!t)return"";var n=this.monthFormatter(e),r=this.monthFormatter(t),c=n===r?"":r,o=e.year,l=t.year,d=o===l?"":l,v=e.day+this.nth(e.day),m=t.day+this.nth(t.day);switch(this.type){case"month":return"".concat(n," ").concat(o);case"week":case"4day":return"".concat(n," ").concat(v," ").concat(o," - ").concat(c," ").concat(m," ").concat(d);case"day":return"".concat(n," ").concat(v," ").concat(o)}return""},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}}),watch:{startDateTime:function(){var e=this.startDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventStart({selectedEvent:this.selectedEvent,start:e})},endDateTime:function(){var e=this.endDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventEnd({selectedEvent:this.selectedEvent,end:e})},selectedEvent:function(){this.startDateTime=this.toISOLocal(new Date(this.selectedEvent.start)),this.endDateTime=this.toISOLocal(new Date(this.selectedEvent.end))}},created:function(){this.fetchSpaceEvents()},mounted:function(){this.$refs.calendar.checkChange()},methods:F({},Object(c.b)("spaceEvents",["fetchSpaceEvents","updateSpaceEvent","updateSpaceEventAttendees","deleteSpaceEvent"]),{},Object(c.c)("spaceEvents",["setUpdatedSpaceEventName","setUpdatedSpaceEventDescription","setUpdatedSpaceEventStart","setUpdatedSpaceEventEnd","setUpdatedSpaceEventAddressName","setUpdatedSpaceEventFullAddress","setUpdatedSpaceEventImageSource","setSpaceEvent"]),{toISOLocal:function(e){var t=function(e){return("0"+e).slice(-2)};return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+("00"+e.getMilliseconds()).slice(-3)+"Z"},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=this.today},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,r=e.event,c=function(){t.selectedEvent=r,t.selectedElement=n.target,t.selectedOpen=!0,setTimeout((function(){return t.selectedOpen=!0}),10),t.setSpaceEvent(t.selectedEvent)};console.log("Before Condition: ".concat(this.selectedOpen)),this.selectedOpen?(this.selectedOpen=!1,setTimeout(c,10)):c(),console.log("After Condition: ".concat(this.selectedOpen)),n.stopPropagation()},toggleOpen:function(e){this.selectedOpen=e},updateRange:function(e){var t=e.start,n=e.end;this.start=t,this.end=n},nth:function(e){return e>3&&e<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][e%10]},cancelEventEdit:function(){this.fetchSpaceEvents(),this.resetEventForm()},deleteEvent:function(){this.deleteSpaceEvent(this.selectedEvent),this.resetEventForm()},enterEditMode:function(){this.editMode=!0},resetEventForm:function(){this.selectedOpen=!1,this.editMode=!1},updateEvent:function(){this.updateSpaceEvent(this.selectedEvent),this.resetEventForm()}})},R=n(401),P=n(127),U=n(80),$=n(52),B=n(29),L=n(30),z=n(136),J=Object(m.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"px-12"},[n("v-row",[n("v-col",[n("v-sheet",{staticClass:"elevation-3",attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:e.setToday}},[e._v("\n            Today\n          ")]),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",medium:""},on:{click:e.prev}},[n("v-icon",{attrs:{large:""}},[e._v("\n              mdi-chevron-left\n            ")])],1),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",medium:""},on:{click:e.next}},[n("v-icon",{attrs:{large:""}},[e._v("\n              mdi-chevron-right\n            ")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{outlined:""}},r),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),e._v(" "),n("v-icon",{attrs:{right:""}},[e._v("\n                  mdi-menu-down\n                ")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("Day")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("Week")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("Month")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),e._v(" "),n("v-sheet",{staticClass:"elevation-3",attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{events:e.spaceEvents,"event-margin-bottom":3,now:e.today,type:e.type,color:"primary","event-color":"primary"},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}})],1)],1)],1),e._v(" "),n("SelectedEventModal",{attrs:{"selected-open":e.selectedOpen,"selected-element":e.selectedElement,"selected-event":e.selectedEvent},on:{toggleOpen:e.toggleOpen}})],1)}),[],!1,null,null,null),H=J.exports;f()(J,{VBtn:S.a,VCalendar:R.a,VCol:_.a,VContainer:O.a,VIcon:C.a,VList:P.a,VListItem:U.a,VListItemTitle:$.b,VMenu:N.a,VRow:T.a,VSheet:B.a,VSpacer:j.a,VToolbar:L.a,VToolbarTitle:z.a});function Z(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function W(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Z(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):Z(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var Y={name:"NewEventDialog",components:{datetime:o.Datetime},data:function(){return{startDateTime:(new Date).toJSON(),endDateTime:(new Date).toJSON(),valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],startRules:[function(e){return!!e||"Start Date is required"}],descriptionRules:[function(e){return!!e||"Description is required"},function(e){return e&&e.length<=1e3||"Description must be less than 1000 characters"}],addressNameRules:[function(e){return!!e||"Address Name is required"},function(e){return e&&e.length<=1e3||"Address Name must be less than 1000 characters"}],fullAddressRules:[function(e){return!!e||"Full Address is required"},function(e){return e&&e.length<=1e3||"Full Address must be less than 1000 characters"}],imageSourceRules:[function(e){return!!e||"Image Source is required"},function(e){return e&&e.length<=1e3||"Image Source must be less than 1000 characters"}],menuOpen:!1}},computed:W({},Object(c.d)("spaceEvents",["newSpaceEventName","newSpaceEventDescription","newSpaceEventStart","newSpaceEventEnd","newSpaceEventAddressName","newSpaceEventFullAddress","newSpaceEventImageSource","spaceEvents"]),{},Object(c.d)("auth",["isLoggedIn","user"])),watch:{startDateTime:function(){console.log(this.startDateTime);var e=this.startDateTime.substr(0,19).replace("T"," ");console.log("Start value: ".concat(e)),this.setNewSpaceEventStart(e)},endDateTime:function(){console.log(this.endDateTime);var e=this.endDateTime.substr(0,19).replace("T"," ");console.log("End value: ".concat(e)),this.setNewSpaceEventEnd(e)}},methods:W({},Object(c.b)("spaceEvents",["createSpaceEvent"]),{},Object(c.c)("spaceEvents",["setNewSpaceEventName","setNewSpaceEventDescription","setNewSpaceEventStart","setNewSpaceEventEnd","setNewSpaceEventAddressName","setNewSpaceEventFullAddress","setNewSpaceEventImageSource"]),{createEvent:function(){this.createSpaceEvent(),this.resetCreateEventForm()},resetCreateEventForm:function(){this.$refs.form.reset(),this.menuOpen=!1}})},G=(n(376),n(397)),K=n(398),Q=Object(m.a)(Y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isLoggedIn?n("v-dialog",{staticClass:"pa-10",attrs:{activator:".add-new-event"},model:{value:e.menuOpen,callback:function(t){e.menuOpen=t},expression:"menuOpen"}},[n("v-sheet",{staticClass:"pa-10 d-flex flex-column"},[n("v-icon",{staticClass:"align-self-end",on:{click:function(t){e.menuOpen=!1}}},[e._v("\n      mdi-close\n    ")]),e._v(" "),n("h3",[e._v("Add a new event")]),e._v(" "),n("v-form",{ref:"form",staticClass:"newEventForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{staticClass:"my-5",attrs:{value:e.newSpaceEventName,counter:50,rules:e.nameRules,label:"Name",required:""},on:{input:e.setNewSpaceEventName}}),e._v(" "),n("v-textarea",{attrs:{value:e.newSpaceEventDescription,rules:e.descriptionRules,counter:1e3,label:"Description",name:"Description","auto-grow":"",required:""},on:{input:e.setNewSpaceEventDescription}}),e._v(" "),n("datetime",{staticClass:"my-5",attrs:{"minute-step":15,type:"datetime","value-zone":"local",zone:"local","use12-hour":"",color:"teal",required:""},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}}),e._v(" "),n("datetime",{staticClass:"my-5",attrs:{"minute-step":15,type:"datetime","value-zone":"local",zone:"local","use12-hour":"",color:"teal"},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}}),e._v(" "),n("v-textarea",{attrs:{id:"start",value:e.newSpaceEventAddressName,rules:e.addressNameRules,counter:1e3,label:"Address Name",name:"AddressName","auto-grow":"",required:""},on:{input:e.setNewSpaceEventAddressName}}),e._v(" "),n("v-textarea",{attrs:{id:"end",value:e.newSpaceEventFullAddress,rules:e.fullAddressRules,counter:1e3,label:"Full Address",name:"FullAddress","auto-grow":"",required:""},on:{input:e.setNewSpaceEventFullAddress}}),e._v(" "),n("v-textarea",{attrs:{value:e.newSpaceEventImageSource,rules:e.imageSourceRules,counter:1e3,label:"Image Source",name:"ImageSource","auto-grow":"",required:""},on:{input:e.setNewSpaceEventImageSource}}),e._v(" "),n("v-sheet",{staticClass:"d-flex justify-space-evenly"},[n("v-btn",{staticClass:"my-5",attrs:{color:"info elevation-10"},on:{click:e.resetCreateEventForm}},[e._v("\n          Reset\n        ")]),e._v(" "),n("v-btn",{staticClass:"my-5 elevation-10",attrs:{color:"primary"},on:{click:e.createEvent}},[e._v("\n          Submit\n        ")])],1)],1)],1)],1):e._e()}),[],!1,null,null,null),X=Q.exports;function ee(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function te(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ee(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):ee(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}f()(Q,{VBtn:S.a,VDialog:G.a,VForm:K.a,VIcon:C.a,VSheet:B.a,VTextField:A.a,VTextarea:k.a});var ne={components:{EventCalendar:H,NewEventDialog:X},data:function(){return{end:null,focus:(new Date).toISOString().substr(0,10),today:(new Date).toISOString().substr(0,10),start:null}},computed:te({},Object(c.d)("spaceEvents",["spaceEvents","days","months"]),{eventsByDateNew:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(b.start)-new Date(a.start)}))},eventsByDateOld:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(a.start)-new Date(b.start)}))},monthFormatter:function(){return this.$refs.miniCal.getFormatter({timeZone:"UTC",month:"long"})},title:function(){var e=this.start,t=this.end;if(!e||!t)return"";var n=this.monthFormatter(e),r=e.year;return"".concat(n," ").concat(r)}}),watch:{eventsByDateNew:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(b.start)-new Date(a.start)}))},eventsByDateOld:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(a.start)-new Date(b.start)}))}},mounted:function(){this.$refs.miniCal.checkChange(),this.fetchSpaceEvents(),this.getSpaceEventAttendeesByEvent(this.spaceEvents)},methods:te({},Object(c.b)("spaceEvents",["fetchSpaceEvents","fetchSpaceEventAttendees"]),{getDayName:function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]},getMonthName:function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]},listDate:function(e){return this.getDayName(new Date(e))+", "+this.getMonthName(new Date(e))+" "+new Date(e).getDate()},listTime:function(e){var t=new Date(e).getHours()%12||12,n=new Date(e).getMinutes(),r=new Date(e).getHours()>11?"PM":"AM";return 0===n?t+":"+n+"0 "+r:n<10?t+":0"+n+" "+r:t+":"+n+" "+r},next:function(){this.$refs.miniCal.next()},nth:function(e){return e>3&&e<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][e%10]},prev:function(){this.$refs.miniCal.prev()},setToday:function(){this.focus=this.today},updateRange:function(e){var t=e.start,n=e.end;this.start=t,this.end=n},getSpaceEventAttendeesByEvent:function(e){var t=this;this.spaceEvents.forEach((function(e){t.fetchSpaceEventAttendees(e)}))}})},ae=Object(m.a)(ne,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"pa-0"},[n("v-sheet",{staticClass:"text-center text-shadow white--text",attrs:{color:"primary lighten-2"}},[n("h1",{class:{"display-2 font-weight-bold pt-6 pb-3":e.$breakpoint.mdAndUp,"display-1 font-weight-bold pt-6 pb-3":e.$breakpoint.smAndDown}},[e._v("\n          Give your time\n        ")]),e._v(" "),n("p",{class:{"headline pt-3 pb-6":e.$breakpoint.mdAndUp,"title pt-3 pb-6":e.$breakpoint.smAndDown}},[e._v("\n          Your time helps fight climate change\n        ")])]),e._v(" "),n("v-container",[n("v-row",[n("v-col",{staticClass:"text-center"},[n("h2",{class:{"headline font-weight-bold py-5":e.$breakpoint.mdAndUp,"title  font-weight-bold py-5":e.$breakpoint.smAndDown}},[e._v("\n              Upcoming Events\n            ")]),e._v(" "),n("p",{class:{"title font-weight-regular":e.$breakpoint.mdAndUp,"subtitle-1 font-weight-regular":e.$breakpoint.smAndDown}},[e._v("\n              Find volunteer events near you\n            ")])])],1),e._v(" "),n("v-row",[n("v-col",[n("v-container",[n("v-row",[n("v-col",{attrs:{sm:"7"}},[n("v-container",{staticClass:"py-0"},[n("v-row",[n("v-col",{staticClass:"py-0"},[n("ul",e._l(e.eventsByDateOld,(function(t){return n("li",{key:t.id},[n("h3",{staticClass:"mb-3 pl-6"},[e._v("\n                              "+e._s(e.listDate(t.start))+"\n                            ")]),e._v(" "),n("v-card",{staticClass:"d-flex mb-6",attrs:{hover:""}},[n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-img",{attrs:{alt:"event image",src:"https://picsum.photos/300/300",height:"200px"}})],1),e._v(" "),n("v-container",[n("v-card-title",{staticClass:"pt-0"},[e._v("\n                                "+e._s(t.name)+"\n                              ")]),e._v(" "),n("v-card-subtitle",{staticClass:"subtitle-1 py-0"},[e._v("\n                                "+e._s(e.listTime(t.start))+"\n                              ")]),e._v(" "),t.creator_name?n("v-card-text",{staticClass:"subtitle-1"},[e._v("\n                                Hosted by "+e._s(t.creator_name)+"\n                              ")]):e._e(),e._v(" "),n("v-card-text",{staticClass:"body-1"},[e._v("\n                                "+e._s(t.attendees.length)+" Volunteers Going\n                              ")]),e._v(" "),n("v-btn",{staticClass:"ml-3 mb-3",attrs:{to:"/events/"+t.id,color:"primary",nuxt:""}},[e._v("\n                                More...\n                              ")])],1)],1)],1)})),0)])],1)],1)],1),e._v(" "),n("v-col",{attrs:{sm:"5"}},[n("v-sheet",{staticClass:"elevation-3"},[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:e.setToday}},[e._v("\n                          Today\n                        ")]),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v("\n                            mdi-chevron-left\n                          ")])],1),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v("\n                            mdi-chevron-right\n                          ")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.title))])],1)],1),e._v(" "),n("v-calendar",{ref:"miniCal",attrs:{now:e.today,color:"primary","event-color":"primary",type:"month"},on:{change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}})],1)],1)],1)],1)],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-card",{staticClass:"ml-12",attrs:{color:"transparent",flat:""}},[n("p",{staticClass:"d-flex align-center"},[n("v-icon",{staticClass:"mr-2"},[e._v("\n                  mdi-calendar-plus\n                ")]),e._v(" "),n("span",{staticClass:"headline"},[e._v("\n                  New Event\n                ")])],1)]),e._v(" "),n("EventCalendar")],1)],1)],1),e._v(" "),n("NewEventDialog")],1)],1)],1)}),[],!1,null,null,null);t.default=ae.exports;f()(ae,{VBtn:S.a,VCalendar:R.a,VCard:w.a,VCardSubtitle:y.b,VCardText:y.c,VCardTitle:y.d,VCol:_.a,VContainer:O.a,VIcon:C.a,VImg:x.a,VRow:T.a,VSheet:B.a,VToolbar:L.a,VToolbarTitle:z.a})}}]);