import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { LinksCollection } from '/imports/api/links';

Meteor.methods({
 

    addLink: async function (title, url) {
        check(title, String);
        check(url, String);
    
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
    
        await LinksCollection.insertAsync({
            title,url
        });
    }
    
  /*  DeleteNotification: async function (name) {
    check(name, String);
    log.info('NameFile : ' + name);
    await Notifications.removeAsync({ NameFile: name });
  }, */

 /*  MethodRejectNotifications: async function (id) {
    check(id, Match.OneOf(String, Meteor.Collection.ObjectID));

    var result = await Notifications.findOneAsync({ _id: id });
    await Notifications.removeAsync({ _id: id });
    await Notifications.removeAsync({
      idNotificationOwner: result.idRequester,
      idAnimal: result.idAnimal,
      Type: 'Animal:WaitingShared'
    });
  } */

  /*   MethodRejectActivityStrava: async function (id) {
    check(id, Match.OneOf(String, Meteor.Collection.ObjectID));
    await Notifications.removeAsync({ idActivity: id });
    await Activities.removeAsync({ _id: id });
  } */
});