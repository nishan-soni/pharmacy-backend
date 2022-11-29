const Model = require("../services/model");

class Medicine_Type extends Model {
  static table_name = "MEDICINE_TYPE";
  static id_col = "TYPE_NAME";
  constructor(type) {
    super();
    this.Type_Name = type.Type_Name;
    this.Form = type.Form;
  }
}

module.exports = Medicine_Type;
