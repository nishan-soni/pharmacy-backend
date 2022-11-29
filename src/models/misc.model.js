const Model = require("../services/model");

class Misc extends Model {
  static table_name = "MISC";
  static id_col = "ITEM_ID";
  constructor(misc) {
    super();
    this.Item_ID = misc.Item_ID;
    this.Name = misc.Name;
    this.Quantity = misc.Quantity;
    this.Price = misc.Price;
    this.Supp_ID = misc.Supp_ID;
  }
}

module.exports = Misc;
