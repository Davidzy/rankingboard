import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Records = new Mongo.Collection('records');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('records', function tasksPublication() {
    return Records.find();
  });
}
