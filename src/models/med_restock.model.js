const Model = require("../services/model");

class Med_Restock extends Model {
  static table_name = "MED_RESTOCK";
  static id_col = "ID";
  constructor(restock) {
    super();
    this.ID = restock.ID;
    this.Quantity = restock.Quantity;
    this.DATE = restock.DATE;
    this.Med_ID = restock.Med_ID;
    this.Supp_ID = restock.Supp_ID;
  }
}

module.exports = Med_Restock;
