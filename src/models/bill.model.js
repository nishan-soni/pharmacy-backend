const Model = require("../services/model");

class Bill extends Model {
  table_name = "BILL";
  id_col = "DATE";
  constructor(bill) {
    super();
    this.Date = bill.Date;
    this.Amount = bill.Amount;
    this.Pharmacist_ID = bill.Pharmacist_ID;
  }
}

module.exports = Bill;
