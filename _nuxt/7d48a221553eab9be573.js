(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(e,t,n){var content=n(370);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("3a15a112",content,!0,{sourceMap:!1})},332:function(e,t,n){var content=n(378);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("46a8e58a",content,!0,{sourceMap:!1})},333:function(e,t,n){var content=n(385);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("7ab2819f",content,!0,{sourceMap:!1})},334:function(e,t,n){var content=n(389);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("bee85bf6",content,!0,{sourceMap:!1})},369:function(e,t,n){"use strict";var r=n(331);n.n(r).a},370:function(e,t,n){var r=n(11);(e.exports=r(!1)).push([e.i,".attendee-list,.event-description{font-size:1.25rem}.attendee-list{color:#000;font-weight:300;margin-bottom:1.5rem}.attendee-list li{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.attendee-list li .v-image{margin-right:1rem}.attendee-list li p{margin-bottom:0}.subtitle{font-size:1.125rem}.update-btn{margin-right:15%}.edit-btn{margin-right:30%}",""])},377:function(e,t,n){"use strict";var r=n(332);n.n(r).a},378:function(e,t,n){var r=n(11);(e.exports=r(!1)).push([e.i,".calendar-content,.calendar-header{width:80vw}.v-calendar-weekly__week{min-height:100px}.v-card>.v-input{margin:.5rem 1rem}.v-card>.vdatetime{margin:1.5rem 1rem}.v-menu__content{contain:none;overflow:visible}.v-menu__content .v-card{width:80vw;height:100%}.v-menu__content .v-card__text:first-of-type{font-size:1.25rem;font-weight:900}.v-menu__content h2{font-size:1.5rem}.v-menu__content .v-card__actions{padding:0}@media screen and (min-width:768px){.v-menu__content .v-card{width:33vw}.v-menu__content .v-card__text:first-of-type{font-weight:900}.v-menu__content h2{font-size:2.25rem}}",""])},384:function(e,t,n){"use strict";var r=n(333);n.n(r).a},385:function(e,t,n){var r=n(11);(e.exports=r(!1)).push([e.i,".v-dialog{width:80vw}.v-text-field__slot{height:60px}@media screen and (min-width:768px){.v-dialog{width:50vw}}",""])},388:function(e,t,n){"use strict";var r=n(334);n.n(r).a},389:function(e,t,n){var r=n(11);(e.exports=r(!1)).push([e.i,'.events{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;margin:2rem 0}.events .events-list{grid-area:eList;text-align:left}.events .events-list .v-card{display:-webkit-box;display:flex}.events .events-list .v-card .event-details{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.events .events-list .v-card .event-details p{margin-bottom:.25rem}.events .events-list .v-card .event-details .attendees,.events .events-list .v-card .event-details .event-time{color:#666}.events .events-list .v-card .event-details .group-name{color:#333;font-size:1rem;font-weight:700}.events .events-list .v-card .event-details .event-name{font-size:1.25rem;font-weight:900}.events .events-list .v-card .more-button{align-self:center;margin-left:auto;margin-right:1rem}.add-new-event{width:80vw;margin:0 auto}.add-new-event v-icon{cursor:pointer}@media screen and (min-width:768px){.events{display:grid;grid-template-areas:"eList eList eList eList eList miniCal" "eList eList eList eList eList ." "eList eList eList eList eList .";grid-template-columns:repeat(5,1fr) 30vw;grid-gap:1rem;gap:1rem;margin:3rem;padding:3rem}.mini-calendar-container{grid-area:miniCal}.mini-calendar-container .calendar-header{width:auto}.mini-calendar-container .v-calendar-weekly__day,.mini-calendar-container .v-calendar-weekly__week{min-height:50px}}',""])},412:function(e,t,n){"use strict";n.r(t);n(10),n(6),n(5),n(4),n(7);var r=n(1),c=n(40),o=(n(32),n(190),n(339));n(340);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{datetime:o.Datetime},props:{selectedElement:{type:null,default:null},selectedEvent:{type:Object,default:function(){}},selectedOpen:{type:Boolean,default:!1}},data:function(){return{date:(new Date).toJSON(),endDateTime:(new Date).toJSON(),editMode:!1,startDateTime:(new Date).toJSON(),switch1:!1,valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],descriptionRules:[function(e){return!!e||"Description is required"},function(e){return e&&e.length<=1e3||"Description must be less than 1000 characters"}],addressNameRules:[function(e){return!!e||"Address Name is required"},function(e){return e&&e.length<=1e3||"Address Name must be less than 1000 characters"}],fullAddressRules:[function(e){return!!e||"Full Address is required"},function(e){return e&&e.length<=1e3||"Full Address must be less than 1000 characters"}],imageSourceRules:[function(e){return!!e||"Image Source is required"},function(e){return e&&e.length<=1e3||"Image Source must be less than 1000 characters"}]}},computed:d({},Object(c.d)("spaceEvents",["newSpaceEventName","newSpaceEventDescription","newSpaceEventStart","newSpaceEventEnd","newSpaceEventAddressName","newSpaceEventFullAddress","newSpaceEventImageSource","rsvp","spaceEvents"]),{},Object(c.d)("auth",["user"]),{volunteersCount:function(){return this.selectedEvent.attendees?this.selectedEvent.attendees.length:"0"},eventDate:function(){return new Date(this.selectedEvent.start).toLocaleString()}}),watch:{startDateTime:function(){var e=this.startDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventStart({selectedEvent:this.selectedEvent,start:e})},endDateTime:function(){var e=this.endDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventEnd({selectedEvent:this.selectedEvent,end:e})},selectedEvent:function(){this.startDateTime=this.toISOLocal(new Date(this.selectedEvent.start)),this.endDateTime=this.toISOLocal(new Date(this.selectedEvent.end)),0!==Object.entries(this.selectedEvent).length||this.selectedEvent.constructor!==Object?this.setRsvpByUser({selectedEvent:this.selectedEvent,user:this.user}):console.log("user rsvp not set")}},mounted:function(){var e=this;this.fetchSpaceEvents(),this.spaceEvents.forEach((function(t){return e.fetchSpaceEventAttendees(t)}))},methods:d({},Object(c.b)("spaceEvents",["deleteSpaceEvent","fetchSpaceEvents","fetchSpaceEventAttendees","updateSpaceEvent","updateSpaceEventAttendees"]),{},Object(c.c)("spaceEvents",["setRsvpByUser","setSpaceEvent","setUpdatedSpaceEventName","setUpdatedSpaceEventDescription","setUpdatedSpaceEventStart","setUpdatedSpaceEventEnd","setUpdatedSpaceEventAddressName","setUpdatedSpaceEventFullAddress","setUpdatedSpaceEventImageSource","toggleRsvp"]),{toISOLocal:function(e){var t=function(e){return("0"+e).slice(-2)};return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+("00"+e.getMilliseconds()).slice(-3)+"Z"},toggleUserAttending:function(){this.toggleRsvp(),this.updateSpaceEventAttendees(this.selectedEvent)},cancelEventEdit:function(){this.resetEventForm()},deleteEvent:function(){this.deleteSpaceEvent(this.selectedEvent),this.resetEventForm()},enterEditMode:function(){this.editMode=!0},toggleEditMode:function(){this.editMode=!this.editMode},resetEventForm:function(){this.editMode=!1,this.$emit("toggleOpen",!1)},updateEvent:function(){this.updateSpaceEvent(this.selectedEvent),this.editMode=!1}})},m=(n(369),n(39)),h=n(59),f=n.n(h),E=n(129),w=n(134),y=n(320),_=n(318),S=n(310),O=n(353),D=n(407),x=n(126),C=n(108),N=n(421),T=n(313),j=n(314),k=n(338),A=n(408),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,color:e.selectedEvent.color},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{staticClass:"d-flex flex-column"},[n("v-card-title",{staticClass:"headline primary white--text justify-space-between"},[e.editMode?e._e():n("h2",[e._v("\n            "+e._s(e.selectedEvent.name)+"\n          ")]),e._v(" "),e.editMode?n("h2",[e._v("\n            Edit "+e._s(e.selectedEvent.name)+"\n          ")]):e._e(),e._v(" "),n("v-btn",{attrs:{color:"primary darken-2",fab:""},on:{click:e.cancelEventEdit}},[n("v-icon",[e._v("\n              mdi-close\n            ")])],1)],1),e._v(" "),e.editMode?e._e():n("v-container",{staticClass:"d-flex flex-column justify-space-evenly"},[n("v-card-text",{staticClass:"py-0",domProps:{textContent:e._s(e.eventDate)}}),e._v(" "),n("v-card-text",{staticClass:"event-description",domProps:{textContent:e._s(e.selectedEvent.description)}}),e._v(" "),n("v-card-text",{staticClass:"subtitle"},[e._v("\n            Volunteers: "+e._s(e.volunteersCount)+"\n          ")]),e._v(" "),n("v-card-text",[n("ul",{staticClass:"attendee-list"},e._l(e.selectedEvent.attendees,(function(t){return n("li",{key:t.id},[n("v-avatar",{attrs:{size:"32"}},[n("v-img",{attrs:{src:t.profile_image_source}})],1),e._v(" "),n("p",[e._v(e._s(t.full_name))])],1)})),0)])],1),e._v(" "),e.editMode?n("v-container",[n("v-text-field",{attrs:{value:e.selectedEvent.name,counter:50,rules:e.nameRules,label:"Name",required:""},on:{input:function(t){return e.setUpdatedSpaceEventName({selectedEvent:e.selectedEvent,name:t})}}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.description,rules:e.descriptionRules,counter:1e3,label:"Description",name:"Description","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventDescription({selectedEvent:e.selectedEvent,description:t})}}}),e._v(" "),n("datetime",{attrs:{type:"datetime","value-zone":"local",zone:"local","use12-hour":"","minute-step":"15",color:"primary",required:""},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}}),e._v(" "),n("datetime",{attrs:{type:"datetime","value-zone":"local",zone:"local","use12-hour":"","minute-step":"15",color:"primary"},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.address_name,rules:e.addressNameRules,counter:1e3,label:"Address Name",name:"AddressName","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventAddressName({selectedEvent:e.selectedEvent,addressName:t})}}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.full_address,rules:e.fullAddressRules,counter:1e3,label:"Full Address",name:"FullAddress","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventFullAddress({selectedEvent:e.selectedEvent,fullAddress:t})}}}),e._v(" "),n("v-textarea",{attrs:{value:e.selectedEvent.image_source,rules:e.imageSourceRules,counter:1e3,label:"Image Source",name:"ImageSource","auto-grow":"",required:""},on:{input:function(t){return e.setUpdatedSpaceEventImageSource({selectedEvent:e.selectedEvent,image_source:t})}}})],1):e._e(),e._v(" "),e.user.id===e.selectedEvent.creator_id?n("v-divider"):e._e(),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{to:"/events/"+e.selectedEvent.id,color:"primary lighten-1",dark:"",fab:"",absolute:"",bottom:"",left:"",nuxt:""}},[n("v-icon",[e._v("\n              mdi-dots-horizontal\n            ")])],1),e._v(" "),e.user.id===e.selectedEvent.creator_id?n("v-btn",{staticClass:"edit-btn",attrs:{color:e.editMode?"warning":"secondary",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.toggleEditMode}},[n("v-icon",[e._v("\n              "+e._s(e.editMode?"mdi-pencil-off":"mdi-pencil")+"\n            ")])],1):e._e(),e._v(" "),e.editMode?n("v-btn",{staticClass:"update-btn",attrs:{color:"primary darken-2",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.updateEvent}},[n("v-icon",[e._v("\n              mdi-content-save\n            ")])],1):e._e(),e._v(" "),e.editMode?n("v-btn",{staticClass:"delete-btn",attrs:{color:"error",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.deleteEvent}},[n("v-icon",[e._v("\n              mdi-trash-can\n            ")])],1):e._e(),e._v(" "),e.editMode?e._e():n("v-btn",{attrs:{color:e.rsvp?"warning":"primary",dark:"",fab:"",absolute:"",bottom:"",right:""},on:{click:e.toggleUserAttending}},[n("v-icon",[e._v("\n              "+e._s(e.rsvp?"mdi-account-minus":"mdi-account-plus")+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null),M=component.exports;function V(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}f()(component,{VAvatar:E.a,VBtn:w.a,VCard:y.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCol:S.a,VContainer:O.a,VDivider:D.a,VIcon:x.a,VImg:C.a,VMenu:N.a,VRow:T.a,VSpacer:j.a,VTextField:k.a,VTextarea:A.a});var I={components:{SelectedEventModal:M},data:function(){return{date:(new Date).toJSON(),startDateTime:(new Date).toJSON(),endDateTime:(new Date).toJSON(),editMode:!1,end:null,focus:(new Date).toISOString().substr(0,10),start:null,selectedElement:null,selectedEvent:{},selectedOpen:!1,today:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],descriptionRules:[function(e){return!!e||"Description is required"},function(e){return e&&e.length<=1e3||"Description must be less than 1000 characters"}],addressNameRules:[function(e){return!!e||"Address Name is required"},function(e){return e&&e.length<=1e3||"Address Name must be less than 1000 characters"}],fullAddressRules:[function(e){return!!e||"Full Address is required"},function(e){return e&&e.length<=1e3||"Full Address must be less than 1000 characters"}],imageSourceRules:[function(e){return!!e||"Image Source is required"},function(e){return e&&e.length<=1e3||"Image Source must be less than 1000 characters"}]}},computed:F({},Object(c.d)("spaceEvents",["newSpaceEventName","newSpaceEventDescription","newSpaceEventStart","newSpaceEventEnd","newSpaceEventAddressName","newSpaceEventFullAddress","newSpaceEventImageSource","spaceEvents"]),{},Object(c.d)("auth",["isLoggedIn","user"]),{title:function(){var e=this.start,t=this.end;if(!e||!t)return"";var n=this.monthFormatter(e),r=this.monthFormatter(t),c=n===r?"":r,o=e.year,l=t.year,d=o===l?"":l,v=e.day+this.nth(e.day),m=t.day+this.nth(t.day);switch(this.type){case"month":return"".concat(n," ").concat(o);case"week":case"4day":return"".concat(n," ").concat(v," ").concat(o," - ").concat(c," ").concat(m," ").concat(d);case"day":return"".concat(n," ").concat(v," ").concat(o)}return""},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}}),watch:{startDateTime:function(){var e=this.startDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventStart({selectedEvent:this.selectedEvent,start:e})},endDateTime:function(){var e=this.endDateTime.substr(0,19).replace("T"," ");this.setUpdatedSpaceEventEnd({selectedEvent:this.selectedEvent,end:e})},selectedEvent:function(){this.startDateTime=this.toISOLocal(new Date(this.selectedEvent.start)),this.endDateTime=this.toISOLocal(new Date(this.selectedEvent.end))}},created:function(){this.fetchSpaceEvents()},mounted:function(){this.$refs.calendar.checkChange()},methods:F({},Object(c.b)("spaceEvents",["fetchSpaceEvents","updateSpaceEvent","updateSpaceEventAttendees","deleteSpaceEvent"]),{},Object(c.c)("spaceEvents",["setUpdatedSpaceEventName","setUpdatedSpaceEventDescription","setUpdatedSpaceEventStart","setUpdatedSpaceEventEnd","setUpdatedSpaceEventAddressName","setUpdatedSpaceEventFullAddress","setUpdatedSpaceEventImageSource","setSpaceEvent"]),{toISOLocal:function(e){var t=function(e){return("0"+e).slice(-2)};return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+"T"+t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())+"."+("00"+e.getMilliseconds()).slice(-3)+"Z"},viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=this.today},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,r=e.event,c=function(){t.selectedEvent=r,t.selectedElement=n.target,t.selectedOpen=!0,setTimeout((function(){return t.selectedOpen=!0}),10),t.setSpaceEvent(t.selectedEvent)};console.log("Before Condition: ".concat(this.selectedOpen)),this.selectedOpen?(this.selectedOpen=!1,setTimeout(c,10)):c(),console.log("After Condition: ".concat(this.selectedOpen)),n.stopPropagation()},toggleOpen:function(e){this.selectedOpen=e},updateRange:function(e){var t=e.start,n=e.end;this.start=t,this.end=n},nth:function(e){return e>3&&e<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][e%10]},cancelEventEdit:function(){this.fetchSpaceEvents(),this.resetEventForm()},deleteEvent:function(){this.deleteSpaceEvent(this.selectedEvent),this.resetEventForm()},enterEditMode:function(){this.editMode=!0},resetEventForm:function(){this.selectedOpen=!1,this.editMode=!1},updateEvent:function(){this.updateSpaceEvent(this.selectedEvent),this.resetEventForm()}})},R=(n(377),n(413)),P=n(127),L=n(80),U=n(52),z=n(29),B=n(30),$=n(135),J=Object(m.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{staticClass:"calendar-header mx-auto",attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:e.setToday}},[e._v("\n          Today\n        ")]),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",medium:""},on:{click:e.prev}},[n("v-icon",{attrs:{large:""}},[e._v("\n            mdi-chevron-left\n          ")])],1),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",medium:""},on:{click:e.next}},[n("v-icon",{attrs:{large:""}},[e._v("\n            mdi-chevron-right\n          ")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.title))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{outlined:""}},r),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),e._v(" "),n("v-icon",{attrs:{right:""}},[e._v("\n                mdi-menu-down\n              ")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("Day")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("Week")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("Month")])],1),e._v(" "),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),e._v(" "),n("v-sheet",{staticClass:"mx-auto calendar-content",attrs:{elevation:"5"}},[n("v-calendar",{ref:"calendar",attrs:{events:e.spaceEvents,"event-margin-bottom":3,now:e.today,type:e.type,color:"primary","event-color":"primary"},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),e._v(" "),n("SelectedEventModal",{attrs:{"selected-open":e.selectedOpen,"selected-element":e.selectedElement,"selected-event":e.selectedEvent},on:{toggleOpen:e.toggleOpen}})],1)],1)],1)}),[],!1,null,null,null),H=J.exports;f()(J,{VBtn:w.a,VCalendar:R.a,VCol:S.a,VIcon:x.a,VList:P.a,VListItem:L.a,VListItemTitle:U.b,VMenu:N.a,VRow:T.a,VSheet:z.a,VSpacer:j.a,VToolbar:B.a,VToolbarTitle:$.a});function Z(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function W(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Z(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):Z(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var Y={name:"NewEventDialog",components:{datetime:o.Datetime},data:function(){return{startDateTime:(new Date).toJSON(),endDateTime:(new Date).toJSON(),valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],startRules:[function(e){return!!e||"Start Date is required"}],descriptionRules:[function(e){return!!e||"Description is required"},function(e){return e&&e.length<=1e3||"Description must be less than 1000 characters"}],addressNameRules:[function(e){return!!e||"Address Name is required"},function(e){return e&&e.length<=1e3||"Address Name must be less than 1000 characters"}],fullAddressRules:[function(e){return!!e||"Full Address is required"},function(e){return e&&e.length<=1e3||"Full Address must be less than 1000 characters"}],imageSourceRules:[function(e){return!!e||"Image Source is required"},function(e){return e&&e.length<=1e3||"Image Source must be less than 1000 characters"}],menuOpen:!1}},computed:W({},Object(c.d)("spaceEvents",["newSpaceEventName","newSpaceEventDescription","newSpaceEventStart","newSpaceEventEnd","newSpaceEventAddressName","newSpaceEventFullAddress","newSpaceEventImageSource","spaceEvents"]),{},Object(c.d)("auth",["isLoggedIn","user"])),watch:{startDateTime:function(){console.log(this.startDateTime);var e=this.startDateTime.substr(0,19).replace("T"," ");console.log("Start value: ".concat(e)),this.setNewSpaceEventStart(e)},endDateTime:function(){console.log(this.endDateTime);var e=this.endDateTime.substr(0,19).replace("T"," ");console.log("End value: ".concat(e)),this.setNewSpaceEventEnd(e)}},methods:W({},Object(c.b)("spaceEvents",["createSpaceEvent"]),{},Object(c.c)("spaceEvents",["setNewSpaceEventName","setNewSpaceEventDescription","setNewSpaceEventStart","setNewSpaceEventEnd","setNewSpaceEventAddressName","setNewSpaceEventFullAddress","setNewSpaceEventImageSource"]),{createEvent:function(){this.createSpaceEvent(),this.resetCreateEventForm()},resetCreateEventForm:function(){this.$refs.form.reset(),this.menuOpen=!1}})},G=(n(384),n(409)),K=n(410),Q=Object(m.a)(Y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isLoggedIn?n("v-dialog",{staticClass:"pa-10",attrs:{activator:".add-new-event"},model:{value:e.menuOpen,callback:function(t){e.menuOpen=t},expression:"menuOpen"}},[n("v-sheet",{staticClass:"pa-10 d-flex flex-column"},[n("v-icon",{staticClass:"align-self-end",on:{click:function(t){e.menuOpen=!1}}},[e._v("\n      mdi-close\n    ")]),e._v(" "),n("h3",[e._v("Add a new event")]),e._v(" "),n("v-form",{ref:"form",staticClass:"newEventForm",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{staticClass:"my-5",attrs:{value:e.newSpaceEventName,counter:50,rules:e.nameRules,label:"Name",required:""},on:{input:e.setNewSpaceEventName}}),e._v(" "),n("v-textarea",{attrs:{value:e.newSpaceEventDescription,rules:e.descriptionRules,counter:1e3,label:"Description",name:"Description","auto-grow":"",required:""},on:{input:e.setNewSpaceEventDescription}}),e._v(" "),n("datetime",{staticClass:"my-5",attrs:{"minute-step":15,type:"datetime","value-zone":"local",zone:"local","use12-hour":"",color:"teal",required:""},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}}),e._v(" "),n("datetime",{staticClass:"my-5",attrs:{"minute-step":15,type:"datetime","value-zone":"local",zone:"local","use12-hour":"",color:"teal"},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}}),e._v(" "),n("v-textarea",{attrs:{id:"start",value:e.newSpaceEventAddressName,rules:e.addressNameRules,counter:1e3,label:"Address Name",name:"AddressName","auto-grow":"",required:""},on:{input:e.setNewSpaceEventAddressName}}),e._v(" "),n("v-textarea",{attrs:{id:"end",value:e.newSpaceEventFullAddress,rules:e.fullAddressRules,counter:1e3,label:"Full Address",name:"FullAddress","auto-grow":"",required:""},on:{input:e.setNewSpaceEventFullAddress}}),e._v(" "),n("v-textarea",{attrs:{value:e.newSpaceEventImageSource,rules:e.imageSourceRules,counter:1e3,label:"Image Source",name:"ImageSource","auto-grow":"",required:""},on:{input:e.setNewSpaceEventImageSource}}),e._v(" "),n("v-sheet",{staticClass:"d-flex justify-space-evenly"},[n("v-btn",{staticClass:"my-5",attrs:{color:"info btn-box-shadow-secondary"},on:{click:e.resetCreateEventForm}},[e._v("\n          Reset\n        ")]),e._v(" "),n("v-btn",{staticClass:"my-5 btn-box-shadow-primary",attrs:{color:"primary"},on:{click:e.createEvent}},[e._v("\n          Submit\n        ")])],1)],1)],1)],1):e._e()}),[],!1,null,null,null),X=Q.exports;function ee(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function te(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ee(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):ee(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}f()(Q,{VBtn:w.a,VDialog:G.a,VForm:K.a,VIcon:x.a,VSheet:z.a,VTextField:k.a,VTextarea:A.a});var ne={components:{EventCalendar:H,NewEventDialog:X},data:function(){return{end:null,focus:(new Date).toISOString().substr(0,10),today:(new Date).toISOString().substr(0,10),start:null}},computed:te({},Object(c.d)("spaceEvents",["spaceEvents","days","months"]),{eventsByDateNew:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(b.start)-new Date(a.start)}))},eventsByDateOld:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(a.start)-new Date(b.start)}))},monthFormatter:function(){return this.$refs.miniCal.getFormatter({timeZone:"UTC",month:"long"})},title:function(){var e=this.start,t=this.end;if(!e||!t)return"";var n=this.monthFormatter(e),r=e.year;return"".concat(n," ").concat(r)}}),watch:{eventsByDateNew:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(b.start)-new Date(a.start)}))},eventsByDateOld:function(){return this.spaceEvents.slice().sort((function(a,b){return new Date(a.start)-new Date(b.start)}))}},mounted:function(){this.$refs.miniCal.checkChange(),this.fetchSpaceEvents(),this.getSpaceEventAttendeesByEvent(this.spaceEvents)},methods:te({},Object(c.b)("spaceEvents",["fetchSpaceEvents","fetchSpaceEventAttendees"]),{getDayName:function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]},getMonthName:function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]},listDate:function(e){return this.getDayName(new Date(e))+", "+this.getMonthName(new Date(e))+" "+new Date(e).getDate()},listTime:function(e){var t=new Date(e).getHours()%12||12,n=new Date(e).getMinutes(),r=new Date(e).getHours()>11?"PM":"AM";return 0===n?t+":"+n+"0 "+r:n<10?t+":0"+n+" "+r:t+":"+n+" "+r},next:function(){this.$refs.miniCal.next()},nth:function(e){return e>3&&e<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][e%10]},prev:function(){this.$refs.miniCal.prev()},setToday:function(){this.focus=this.today},updateRange:function(e){var t=e.start,n=e.end;this.start=t,this.end=n},getSpaceEventAttendeesByEvent:function(e){var t=this;this.spaceEvents.forEach((function(e){t.fetchSpaceEventAttendees(e)}))}})},ae=(n(388),n(327)),se=Object(m.a)(ne,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[n("v-col",{staticClass:"pa-0 text-center"},[n("v-sheet",{staticClass:"white--text",attrs:{color:"primary lighten-2"}},[n("h1",{staticClass:"display-3 pt-6 pb-3"},[e._v("\n        Give your time\n      ")]),e._v(" "),n("p",{staticClass:"headline pt-3 pb-6"},[e._v("\n        Your time helps fight climate change\n      ")])]),e._v(" "),n("v-sheet",{staticClass:"py-5 d-flex flex-column"},[n("h2",{staticClass:"display-1 py-5"},[e._v("\n        Upcoming Events\n      ")]),e._v(" "),n("p",{staticClass:"title"},[e._v("\n        Find volunteer events near you\n      ")]),e._v(" "),n("v-container",{staticClass:"events"},[n("v-container",{staticClass:"events-list"},[n("ul",e._l(e.eventsByDateOld,(function(t){return n("li",{key:t.id},[n("h3",{staticClass:"mb-3"},[e._v("\n                "+e._s(e.listDate(t.start))+"\n              ")]),e._v(" "),n("v-card",{staticClass:"mb-6"},[n("p",{staticClass:"event-time mt-3 mx-3"},[e._v("\n                  "+e._s(e.listTime(t.start))+"\n                ")]),e._v(" "),n("v-sheet",{staticClass:"event-details mt-2"},[n("p",{staticClass:"event-name"},[e._v("\n                    "+e._s(t.name)+"\n                  ")]),e._v(" "),t.creator_name?n("p",{staticClass:"host"},[e._v("\n                    Hosted by "+e._s(t.creator_name)+"\n                  ")]):e._e(),e._v(" "),n("p",{staticClass:"attendees"},[e._v("\n                    "+e._s(t.attendees.length)+" Volunteers Going\n                  ")])]),e._v(" "),n("v-btn",{staticClass:"more-button",attrs:{to:"/events/"+t.id,color:"primary",nuxt:""}},[e._v("\n                  More...\n                ")])],1)],1)})),0)]),e._v(" "),n("v-sheet",{staticClass:"mini-calendar-container",attrs:{elevation:"5"}},[n("v-sheet",{staticClass:"calendar-header mx-auto",attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:""},on:{click:e.setToday}},[e._v("\n                Today\n              ")]),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v("\n                  mdi-chevron-left\n                ")])],1),e._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v("\n                  mdi-chevron-right\n                ")])],1),e._v(" "),n("v-toolbar-title",[e._v(e._s(e.title))])],1)],1),e._v(" "),n("v-calendar",{ref:"miniCal",staticClass:"mini-calendar",attrs:{now:e.today,color:"primary","event-color":"primary",type:"month"},on:{change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}})],1)],1),e._v(" "),n("p",{staticClass:"add-new-event d-flex align-center"},[n("v-icon",{staticClass:"mr-2"},[e._v("\n          mdi-calendar-plus\n        ")]),e._v(" "),n("span",{staticClass:"headline"},[e._v("\n          New Event\n        ")])],1),e._v(" "),n("NewEventDialog"),e._v(" "),n("EventCalendar")],1)],1)],1)}),[],!1,null,null,null);t.default=se.exports;f()(se,{VBtn:w.a,VCalendar:R.a,VCard:y.a,VCol:S.a,VContainer:O.a,VIcon:x.a,VLayout:ae.a,VSheet:z.a,VToolbar:B.a,VToolbarTitle:$.a})}}]);