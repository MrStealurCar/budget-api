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

envelopeRouter.get("/:id", (req, res, next) => {
  const envelopeId = req.params.id;
  const turnIdToNum = Number(envelopeId);
  const foundEnvelope = mockEnvelopes.find(
    (currentVal) => currentVal.id === turnIdToNum
  );

  if (foundEnvelope) {
    res.send(foundEnvelope);
  } else {
    res.status(404).send("Envelope not found");
  }
});

envelopeRouter.put("/:id", (req, res, next) => {
  const envelopeId = req.params.id;
  const turnIdToNum = Number(envelopeId);
  const foundEnvelope = mockEnvelopes.find(
    (currentVal) => currentVal.id === turnIdToNum
  );
  if (foundEnvelope) {
    foundEnvelope.title = req.body.title;
    foundEnvelope.budget = req.body.budget;
    res.send(foundEnvelope);
  } else {
    res.status(404).send();
  }
});

module.exports = envelopeRouter;
