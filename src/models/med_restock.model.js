const Model = require("../services/model");
const Medicine = require("./medicine.model");
const db = require("../services/db");

class Med_Restock extends Model {
  static table_name = "MED_RESTOCK";
  static id_col = "ID";
  constructor(restock) {
    super();
    this.ID = restock.ID;
    this.Quantity = restock.Quantity;
    this.Date = restock.Date;
    this.Med_ID = restock.Med_ID;
    this.Supp_ID = restock.Supp_ID;
  }

  // Updating the med items stock when a restock is added
  static create(model, result) {
    super.create(model, result);
    db.query(
      `SELECT * FROM MEDICINE WHERE Item_ID = ${model.Med_ID}`,
      (err, data) => {
        data = data[0];
        const new_quantity = data.Quantity + model.Quantity;
        data.Quantity = new_quantity;
        const med = new Medicine(data);

        db.query(
          `UPDATE MEDICINE SET ? WHERE Item_ID = ${med.Item_ID}`,
          { Quantity: med.Quantity },
          (err, result) => {
            console.log(err);
          }
        );
      }
    );
  }
}

module.exports = Med_Restock;
