const Model = require("../services/model");

class Supplier extends Model {
  static table_name = "SUPPLIER";
  static id_col = "SUPP_ID";
  constructor(supplier) {
    super();
    this.Supp_ID = supplier.Supp_ID;
    this.Address = supplier.Address;
    this.Supp_Name = supplier.Supp_Name;
  }
}

module.exports = Supplier;
