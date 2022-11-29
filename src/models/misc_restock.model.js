const Model = require("../services/model");

class Misc_Restock extends Model {
  static table_name = "MISC_RESTOCK";
  static id_col = "ID";
  constructor(restock) {
    super();
    this.ID = restock.ID;
    this.Quantity = restock.Quantity;
    this.DATE = restock.DATE;
    this.Misc_ID = restock.Misc_ID;
    this.Supp_ID = restock.Supp_ID;
  }
}

module.exports = Misc_Restock;
