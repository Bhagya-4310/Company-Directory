const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  industry: { type: String, required: true },
  employees: { type: Number, required: true },
  founded: { type: Number, required: true }
});

module.exports = mongoose.model("Company", companySchema);
