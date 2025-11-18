const Company = require("../models/company");

class CompanyController {

  // GET all companies
  static async getCompanies(req, res) {
    try {
      const companies = await Company.find().sort({ name: 1 });
      return res.status(200).json(companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
      return res.status(500).json({ message: "Server Error" });
    }
  }

  // ADD new company
  static async addCompany(req, res) {
    try {
      const company = new Company(req.body);
      const saved = await company.save();
      return res.status(201).json(saved);
    } catch (error) {
      console.error("Error adding company:", error);
      return res.status(400).json({ message: "Invalid Data" });
    }
  }

  // GET company by ID
  static async getCompanyById(req, res) {
    try {
      const company = await Company.findById(req.params.id);

      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }

      return res.status(200).json(company);
    } catch (error) {
      console.error("Error fetching company:", error);
      return res.status(500).json({ message: "Server Error" });
    }
  }

  // UPDATE company
  static async updateCompany(req, res) {
    try {
      const updated = await Company.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!updated) {
        return res.status(404).json({ message: "Company not found" });
      }

      return res.status(200).json(updated);
    } catch (error) {
      console.error("Error updating company:", error);
      return res.status(500).json({ message: "Server Error" });
    }
  }

  // DELETE company
  static async deleteCompany(req, res) {
    try {
      const deleted = await Company.findByIdAndDelete(req.params.id);

      if (!deleted) {
        return res.status(404).json({ message: "Company not found" });
      }

      return res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
      console.error("Error deleting company:", error);
      return res.status(500).json({ message: "Server Error" });
    }
  }
}

module.exports = CompanyController;
