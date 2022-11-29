const Model = require("../services/model");

class Prescription extends Model {
  static table_name = "PRESCRIPTION";
  static id_col = "ID";
  constructor(prescription) {
    super();
    this.ID = prescription.ID;
    this.Descrip = prescription.Descrip;
    this.Date = prescription.Date;
    this.DocName = prescription.DocName;
    this.FilledBy = prescription.FilledBy;
    this.PrescTo = prescription.PrescTo;
  }
}

module.exports = Prescription;
