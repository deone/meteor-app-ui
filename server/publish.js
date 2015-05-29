Meteor.publish('dummyData', function() {
  return Dummy.find();
});
