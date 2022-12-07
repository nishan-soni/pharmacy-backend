const Model = require("../services/model");

class Contract extends Model {
  static table_name = "CONTRACT";
  static id_col = "CONTRACTID";
  constructor(contract) {
    super();
    this.contractID = contract.contractID;
    this.Start_Date = contract.Start_Date;
    this.End_Date = contract.End_Date;
    this.Cont_With = contract.Cont_With;
  }
}

module.exports = Contract;
