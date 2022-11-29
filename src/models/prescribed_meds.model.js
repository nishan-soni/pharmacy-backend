const Model = require("../services/model");

class Prescribed_Meds extends Model {
  static table_name = "PRESCRIBED_MEDS";
  static id_col = "ID";
  constructor(prescribed) {
    super();
    this.ID = prescribed.ID;
    this.Quantity = prescribed.Quantity;
    this.Unit_Of_Meas = prescribed.Unit_Of_Meas;
    this.Presc_ID = prescribed.Presc_ID;
    this.Med_ID = prescribed.Med_ID;
  }
}

module.exports = Prescribed_Meds;
