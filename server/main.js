import { Meteor } from 'meteor/meteor'
import { LinksCollection } from '/imports/api/links'
import '/imports/methods/links'

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() })
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if ((await LinksCollection.find().countAsync()) === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://vuejs.org/guide/quick-start.html',
    })

    await insertLink({
      title: 'Follow the Guide',
      url: 'https://guide.meteor.com',
    })

    await insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    })

    await insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    })
  }

  if (!(await Accounts.findUserByEmail('harry@harry.com'))) {
    await Accounts.createUserAsync({ username: 'Harry73', email: 'harry@harry.com', password: 'harry' })
  }
})
