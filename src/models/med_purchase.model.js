const Model = require("../services/model");
const Medicine = require("./medicine.model");
const db = require("../services/db");

class Med_Purchase extends Model {
  static table_name = "MED_PURCHASE";
  static id_col = "ID";
  constructor(med_purchase) {
    super();
    this.ID = med_purchase.ID;
    this.Date = med_purchase.Date;
    this.Total = med_purchase.Total;
    this.Insured = med_purchase.Insured;
    this.Patient_ID = med_purchase.Patient_ID;
    this.Item_ID = med_purchase.Item_ID;
    this.Quantity = med_purchase.Quantity;
  }

  // Updating the med items stock when a purchase is added
  static create(model, result) {
    super.create(model, result);
    db.query(
      `SELECT * FROM MEDICINE WHERE Item_ID = ${model.Item_ID}`,
      (err, data) => {
        data = data[0];
        const new_quantity = data.Quantity - model.Quantity;
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

module.exports = Med_Purchase;
