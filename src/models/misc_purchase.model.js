const Model = require("../services/model");
const Misc = require("./misc.model");
const db = require("../services/db");

class Misc_Purchase extends Model {
  static table_name = "MISC_PURCHASE";
  static id_col = "ID";
  constructor(misc_purchase) {
    super();
    this.ID = misc_purchase.ID;
    this.Date = misc_purchase.Date;
    this.Quantity = misc_purchase.Quantity;
    this.Total = misc_purchase.Total;
    this.Patient_ID = misc_purchase.Patient_ID;
    this.Item_ID = misc_purchase.Item_ID;
  }

  // Updating the misc items stock when a purchase is added
  static create(model, result) {
    super.create(model, result);
    db.query(
      `SELECT * FROM MISC WHERE Item_ID = ${model.Item_ID}`,
      (err, data) => {
        data = data[0];
        const new_quantity = data.Quantity - model.Quantity;
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

module.exports = Misc_Purchase;
