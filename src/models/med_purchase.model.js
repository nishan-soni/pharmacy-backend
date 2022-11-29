const Model = require("../services/model");

class Med_Purchase extends Model {
  static table_name = "MED_PURCHASE";
  static id_col = "ID";
  constructor(med_purchase) {
    super();
    this.ID = med_purchase.ID;
    this.Date = med_purchase.Date;
    this.Amount = med_purchase.Amount;
    this.Pharmacist_ID = med_purchase.Pharmacist_ID;
  }
}

module.exports = Med_Purchase;
