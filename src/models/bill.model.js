const Model = require("../services/model");

class Bill extends Model {
  static table_name = "BILL";
  static id_col = "ID";
  constructor(bill) {
    super();
    this.ID = bill.ID;
    this.Date = bill.Date;
    this.Amount = bill.Amount;
    this.Pharmacist_ID = bill.Pharmacist_ID;
  }
}

module.exports = Bill;
