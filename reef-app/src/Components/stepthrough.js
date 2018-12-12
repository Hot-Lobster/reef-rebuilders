import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";

function getSteps() {
  return ["login", "create account", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Step 1: Login";
    case 1:
      return "Step 2: Create an account.";
    case 2:
      return "Step 3: main view";
    default:
      return "Unknown step";
  }
}
