require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("627aa0d471ce965af0c1ee3a")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
