const app = require("./index");
const connect = require("./configs/db");

app.listen(process.env.PORT || 2101, async function () {
  try {
    await connect();
    console.log("listening on port 2101");
  } catch (error) {
    console.log(error);
  }
});
