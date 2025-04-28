const express = require("express");
const envelopeRouter = express.Router();
const { mockEnvelopes } = require("../db.js");

envelopeRouter.get("/", (req, res, next) => {
  res.send(mockEnvelopes);
});

envelopeRouter.post("/", (req, res, next) => {
  //finds the highest ID in the mockEnvelopes array
  const findHighestId = mockEnvelopes.reduce((acc, currentVal) => {
    if (acc.id > currentVal.id) {
      return acc.id;
    } else {
      return currentVal.id;
    }
  }, 0); // Starts at 0 to handle an empty array
  const newBudget = {
    id: findHighestId + 1,
    title: req.body.title,
    budget: req.body.budget,
  };
  mockEnvelopes.push(newBudget);

  res.status(201).send(mockEnvelopes);
});

module.exports = envelopeRouter;
