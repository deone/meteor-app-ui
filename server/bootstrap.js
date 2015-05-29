// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Dummy.find().count() === 0) {
    Dummy.insert({
      name: "Dayo",
      office: "iSpace",
      title: "Code Monkey"
    });

    Dummy.insert({
      name: "Lanre",
      office: "iSpace",
      title: "Solutions Architect"
    });

    Dummy.insert({
      name: "Layi",
      office: "iSpace",
      title: "Hacker-at-large"
    });

    Dummy.insert({
      name: "Fola",
      office: "iSpace",
      title: "Accountant"
    });
  }
});
