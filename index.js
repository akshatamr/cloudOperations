"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var bot =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.city
      ? req.body.result.parameters.city
      : "Seems like some problem. Speak again.";
  return res.json({
    displayText: bot,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
