const axios = require("axios");
const { check, validationResult } = require("express-validator/check");

module.exports = {
  signupValidation: data => {
    var missingVar = [];
    var emailValidation = "";

    $.each(data, function(index, value) {
      if (value === "") {
        missingVar.push(index);
      }
    });
    return missingVar;
  }
};
