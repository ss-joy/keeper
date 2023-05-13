require("dotenv").config();
const express = require("express");
const app = express();

const server_port = process.env.SERVER_PORT;
app.listen(server_port, () => {
  console.log(`server started @ PORT:${server_port}`);
});
