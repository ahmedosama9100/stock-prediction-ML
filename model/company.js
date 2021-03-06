const mongoose = require("mongoose");

const companySchema = {
  companyName: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    unique: true,
  },
  sector: {
    type: String,
    required: true,
  },
  srcImg: {
    type: String,
    required: true,
  },
  headquarters: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  webSite: {
    type: String,
    required: true,
  },
  CEO: {
    type: String,
    required: true,
  },
  CEOTitle: {
    type: String,
    required: true,
  },
};

module.exports = Company = mongoose.model("Company", companySchema);
