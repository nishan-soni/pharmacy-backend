const Model = require("../services/model");

class Contract extends Model {
  static table_name = "CONTRACT";
  static id_col = "ID";
  constructor(contract) {
    super();
    this.ID = contract.ID;
    this.contractID = contract.contractID;
    this.Start_Date = contract.Start_Date;
    this.End_Date = contract.End_Date;
    this.Cont_With = contract.Cont_With;
  }
}

module.exports = Contract;
