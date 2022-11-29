const Model = require("../services/model");
const db = require("../services/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../configs/config");
const mysql = require("mysql");

class Employee extends Model {
  static table_name = "EMPLOYEE";
  static id_col = "USERID";
  constructor(employee) {
    super();
    this.Full_Name = employee.Full_Name;
    this.E_Address = employee.E_Address;
    this.Password = employee.Password;
    this.S_Address = employee.S_Address;
    this.UserID = employee.UserID;
    this.token = employee.token;
  }

  static async registerUser(model, result) {
    const { E_Address, Password } = model;
    const existingUser = db.query(
      `SELECT * FROM EMPLOYEE WHERE E_Address = ${E_Address}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return true;
        }
        if (res.length > 0) {
          return true;
        }
        return false;
      }
    );
    if (existingUser === true) {
      return result("User already exists", null);
    }
    const encryptedpass = await bcrypt.hash(Password, 10);
    model.Password = encryptedpass;

    const token = jwt.sign({ E_Address, admin: true }, jwtKey, {
      algorithm: "HS256",
    });

    model.token = token;

    db.query("INSERT INTO EMPLOYEE SET ?", model, (err, data) => {
      if (err) {
        return result(err, null);
      }
      return result(null, { ...data, token });
    });
  }

  static login(creds, result) {
    const { email, password } = creds;
    db.query(
      // Preventing SQL injection
      "SELECT * FROM EMPLOYEE WHERE E_Address =" + mysql.escape(email),
      (err, data) => {
        if (err) {
          return result(err, null);
        }
        if (data.length > 0) {
          bcrypt
            .compare(password, data[0].Password)
            .then((match) => {
              if (match) {
                let user = new Employee(data[0]);
                return result(null, { token: user.token });
              } else {
                return result({ error: "Incorrect login details" }, null);
              }
            })
            .catch((err) => {
              return result({ error: err }, null);
            });
        } else {
          return result({ error: "Incorrect login details" }, null);
        }
      }
    );
  }
}

module.exports = Employee;
