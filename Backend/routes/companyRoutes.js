const express = require("express");
const router = express.Router();
const CompanyController = require("../controllers/companyController");

// Routes
router.get("/", CompanyController.getCompanies);
router.post("/", CompanyController.addCompany);
router.get("/:id", CompanyController.getCompanyById);
router.put("/:id", CompanyController.updateCompany);
router.delete("/:id", CompanyController.deleteCompany);

module.exports = router;
