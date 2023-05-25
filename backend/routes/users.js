const express = require("express");

const { dbConnection } = require("../db");
const { defaultCallback } = require("../utils/dbUtils");

const router = express.Router();

router.get("/users", (req, res) => {
  dbConnection.execute("SELECT * FROM users", (err, result) =>
    defaultCallback(err, result, res)
  );
});

router.post("/users", (req, res) => {
  const { name, surname, email, phone_number } = req.body;

  dbConnection.execute(
    `INSERT INTO users (name, surname, email, phone_number)
      VALUES (?, ?, ?, ?)
      `,
    [name, surname, email, phone_number],
    (err, result) => defaultCallback(err, result, res)
  );
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  dbConnection.execute("DELETE FROM users WHERE id=?", [id], (err, result) =>
    defaultCallback(err, result, res)
  );
});

router.put("/users/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;

  dbConnection.execute(
    "UPDATE users SET name=?, surname=?, email=?, phone_number=? WHERE id=?",
    [body.name, body.surname, body.email, body.phone_number, id],
    (err, result) => defaultCallback(err, result, res)
  );
});

module.exports = router;
