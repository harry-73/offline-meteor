import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import '/imports/methods/links'
import { VueMeteor } from 'vue-meteor-tracker'

import App from './App.vue'
import { router } from './router'

Meteor.startup(() => {

  Meteor.loginWithPassword('harry@harry.com', 'harry', (err) => {
    if (err) {
      console.log(err)
    }
  });
  const app = createApp(App)
  app.use(router)
  app.use(VueMeteor)
  app.mount('#app')
})
