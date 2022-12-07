const Model = require("../services/model");
const db = require("../services/db");

class Patient extends Model {
  static table_name = "PATIENT";
  static id_col = "PATIENT_ID";
  constructor(patient) {
    super();
    this.Fname = patient.Fname;
    this.Lname = patient.Lname;
    this.E_Address = patient.E_Address;
    this.Patient_ID = patient.Patient_ID;
    this.S_Address = patient.S_Address;
  }

  static getPrescriptions(id, result) {
    db.query(`SELECT * FROM PRESCRIPTION WHERE PrescTo = ${id}`, (err, res) => {
      if (err) {
        return result(err, null);
      }
      return result(null, res);
    });
  }
}

module.exports = Patient;
