const Model = require("../services/model");

class Patient extends Model {
  static table_name = "PATIENT";
  static id_col = "PATIENT_ID";
  constructor(patient) {
    super();
    this.Fname = patient.Fname;
    this.Lname = patient.Fname;
    this.E_Address = patient.E_Address;
    this.Patient_ID = patient.Patient_ID;
    this.S_Address = patient.S_Address;
  }
}

module.exports = Patient;
