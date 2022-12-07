const Model = require("../services/model");

class Medicine extends Model {
  static table_name = "MEDICINE";
  static id_col = "ITEM_ID";
  constructor(med) {
    super();
    this.Item_ID = med.Item_ID;
    this.Name = med.Name;
    this.Quantity = med.Quantity;
    this.Price = med.Price;
    this.Supp_ID = med.Supp_ID;
    this.Type_Of = med.Type_Of;
  }
}

module.exports = Medicine;
