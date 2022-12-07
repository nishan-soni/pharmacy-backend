const db = require("./db");

/**
 * Abstract model class with CRUD operations
 */
class Model {
  static table_name = "";
  static id_col = "";

  constructor() {}

  static create(model, result) {
    db.query(`INSERT INTO ${this.table_name} SET ?`, model, (err, data) => {
      if (err) {
        return result(err, null);
      }
      return result(null, data);
    });
  }

  static findByID(id, result) {
    db.query(
      `SELECT * FROM ${this.table_name} WHERE ${this.id_col} = ${id}`,
      (err, data) => {
        if (err) {
          return result(err, null);
        }
        return result(null, data);
      }
    );
  }

  static getAll(result) {
    db.query(`SELECT * FROM ${this.table_name}`, (err, data) => {
      if (err) {
        return result(err, null);
      }
      return result(null, data);
    });
  }

  static delete(id, result) {
    db.query(
      `DELETE FROM ${this.table_name} WHERE ${this.id_col} = ${id}`,
      (err, data) => {
        if (err) {
          return result(err, null);
        }
        return result(null, data);
      }
    );
  }

  static update(id, model, result) {
    db.query(
      `UPDATE ${this.table_name} SET ? WHERE ${this.id_col} = ${id}`,
      model,
      (err, data) => {
        if (err) {
          return result(err, null);
        }
        return result(null, data);
      }
    );
  }
}

module.exports = Model;
