const Model = require("../services/model");

class Medicine extends Model {
  static table_name = "MEDICINE";
  static id_col = "ITEM_ID";
  constructor(misc) {
    super();
    this.Item_ID = misc.Item_ID;
    this.Name = misc.Name;
    this.Quantity = misc.Quantity;
    this.Price = misc.Price;
    this.Supp_ID = misc.Supp_ID;
    this.Exp_Date = misc.Exp_Date;
    this.Type_Of = misc.Type_Of;
  }
}

module.exports = Medicine;
