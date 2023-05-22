require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authenticationRouter = require("./routes/authentication");

const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use(authenticationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
