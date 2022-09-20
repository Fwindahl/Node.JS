const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "Techover";

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  //   db.collection("user").insertMany(
  //     [
  //       {
  //         name: "Filip",
  //         age: 28,
  //         city: "Stockholm",
  //       },
  //       {
  //         name: "Hampus",
  //         age: 27,
  //         city: "Eskilstuna",
  //       },
  //       {
  //         name: "Niklas",
  //         age: 27,
  //         city: "Stockholm",
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         console.log("Cannot fetch users");
  //       }
  //       console.log(result.ops);
  //     }
  //   );

  db.collection("user").findOne(
    { _id: new ObjectID("627e1e67fac0951fb0f46896") },
    (error, user) => {
      console.log(user);
    }
  );
});
