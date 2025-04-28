const express = require("express");
const app = express();
const PORT = process.env.PORT || 3005;
const { envelopes } = require("db.js");

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
