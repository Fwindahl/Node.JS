require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("627aadfa84f0c843d790cbd4", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
