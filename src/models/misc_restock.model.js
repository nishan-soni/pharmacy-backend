const Model = require("../services/model");
const Misc = require("./misc.model");
const db = require("../services/db");

class Misc_Restock extends Model {
  static table_name = "MISC_RESTOCK";
  static id_col = "ID";
  constructor(restock) {
    super();
    this.ID = restock.ID;
    this.Quantity = restock.Quantity;
    this.Date = restock.Date;
    this.Misc_ID = restock.Misc_ID;
    this.Supp_ID = restock.Supp_ID;
  }

  // Updating the misc items stock when a restock is added
  static create(model, result) {
    super.create(model, result);
    db.query(
      `SELECT * FROM MISC WHERE Item_ID = ${model.Misc_ID}`,
      (err, data) => {
        data = data[0];
        const new_quantity = data.Quantity + model.Quantity;
        data.Quantity = new_quantity;
        const misc = new Misc(data);

        db.query(
          `UPDATE MISC SET ? WHERE Item_ID = ${misc.Item_ID}`,
          { Quantity: misc.Quantity },
          (err, result) => {
            console.log(err);
          }
        );
      }
    );
  }
}

module.exports = Misc_Restock;
