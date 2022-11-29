const Model = require("../services/model");

class Misc_Purchase extends Model {
  static table_name = "MISC_PURCHASE";
  static id_col = "ID";
  constructor(misc_purchase) {
    super();
    this.ID = misc_purchase.ID;
    this.Date = misc_purchase.Date;
    this.Amount = misc_purchase.Amount;
  }
}

module.exports = Misc_Purchase;
