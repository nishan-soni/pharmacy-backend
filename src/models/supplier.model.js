const Model = require("../services/model");
const db = require("../services/db");

class Supplier extends Model {
  static table_name = "SUPPLIER";
  static id_col = "SUPP_ID";
  constructor(supplier) {
    super();
    this.Supp_ID = supplier.Supp_ID;
    this.Address = supplier.Address;
    this.Supp_Name = supplier.Supp_Name;
  }

  static getContracts(id, result) {
    db.query(`SELECT * FROM CONTRACT WHERE Cont_With = ${id}`, (err, res) => {
      if (err) {
        return result(err, null);
      }
      return result(null, res);
    });
  }
}

module.exports = Supplier;
