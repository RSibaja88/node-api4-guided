const server = require("./api/server.js");
require("dotenv").config();
const port = process.env.PORT;
console.log("port:", port)

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
// CI/CD: development => testing => staging => production