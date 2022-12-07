const router = require("express");
const controller = require("../controllers/controller");
const PatientModel = require("../models/patient.model");
const BillModel = require("../models/bill.model");
const ContractModel = require("../models/contract.model");
const EmployeeModel = require("../models/employee.model");
const PharmacistModel = require("../models/pharmacist.model");
const Med_PurchaseModel = require("../models/med_purchase.model");
const MedicineTypeModel = require("../models/medicine_type.model");
const MedicineModel = require("../models/medicine.model");
const Misc_PurchaseModel = require("../models/misc_purchase.model");
const MiscModel = require("../models/misc.model");
const PrescriptionModel = require("../models/prescription.model");
const SupplierModel = require("../models/supplier.model");
const Med_RestockModel = require("../models/med_restock.model");
const Misc_RestockModel = require("../models/misc_restock.model");

class PharmacistController extends controller.ControllerClass {
  static ModelClass = PharmacistModel;

  static register() {
    return (req, res) => {
      this.ModelClass.registerUser(
        new this.ModelClass(req.body),
        (err, data) => {
          if (err) res.status(401).send(err);
          else res.send(data);
        }
      );
    };
  }

  static login() {
    return (req, res) => {
      this.ModelClass.login(req.body, (err, data) => {
        if (err) res.status(401).send(err);
        else res.send(data);
      });
    };
  }
}

const pharmacistRouter = router.Router();
pharmacistRouter.post("/register", PharmacistController.register());
pharmacistRouter.post("/login", PharmacistController.login());
pharmacistRouter.get("/", PharmacistController.getAll());

class EmployeeController extends controller.ControllerClass {
  static ModelClass = EmployeeModel;

  static register() {
    return (req, res) => {
      this.ModelClass.registerUser(
        new this.ModelClass(req.body),
        (err, data) => {
          if (err) res.status(401).send(err);
          else res.send(data);
        }
      );
    };
  }

  static login() {
    return (req, res) => {
      this.ModelClass.login(req.body, (err, data) => {
        if (err) res.status(401).send(err);
        else res.send(data);
      });
    };
  }
}

const employeeRouter = router.Router();
employeeRouter.post("/register", EmployeeController.register());
employeeRouter.post("/login", EmployeeController.login());

class PatientController {
  static ModelClass = PatientModel;

  static getPrescriptions() {
    return (req, res) => {
      this.ModelClass.getPrescriptions(req.params.id, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
      });
    };
  }
}

const patientRouter = router.Router();
patientRouter.post("/", controller.create(PatientModel));
patientRouter.get("/", controller.getAll(PatientModel));
patientRouter.get("/:id", controller.findByID(PatientModel));
patientRouter.get("/:id/prescriptions", PatientController.getPrescriptions());
patientRouter.post("/:id", controller.update(PatientModel));
patientRouter.delete("/:id", controller.deleteItem(PatientModel));

const medicineRouter = router.Router();
medicineRouter.post("/", controller.create(MedicineModel));
medicineRouter.get("/", controller.getAll(MedicineModel));
medicineRouter.get("/:id", controller.findByID(MedicineModel));
medicineRouter.post("/:id", controller.update(MedicineModel));
medicineRouter.delete("/:id", controller.deleteItem(MedicineModel));

const miscRouter = router.Router();
miscRouter.post("/", controller.create(MiscModel));
miscRouter.get("/", controller.getAll(MiscModel));
miscRouter.get("/:id", controller.findByID(MiscModel));
miscRouter.post("/:id", controller.update(MiscModel));
miscRouter.delete("/:id", controller.deleteItem(MiscModel));

const medicineTypeRouter = router.Router();
medicineTypeRouter.post("/", controller.create(MedicineTypeModel));
medicineTypeRouter.get("/", controller.getAll(MedicineTypeModel));
medicineTypeRouter.get("/:id", controller.findByID(MedicineTypeModel));
medicineTypeRouter.post("/:id", controller.update(MedicineTypeModel));
medicineTypeRouter.delete("/:id", controller.deleteItem(MedicineTypeModel));

const medPurchaseRouter = router.Router();
medPurchaseRouter.post("/", controller.create(Med_PurchaseModel));
medPurchaseRouter.get("/", controller.getAll(Med_PurchaseModel));
medPurchaseRouter.get("/:id", controller.findByID(Med_PurchaseModel));
medPurchaseRouter.post("/:id", controller.update(Med_PurchaseModel));
medPurchaseRouter.delete("/:id", controller.deleteItem(Med_PurchaseModel));

const miscPurchaseRouter = router.Router();
miscPurchaseRouter.post("/", controller.create(Misc_PurchaseModel));
miscPurchaseRouter.get("/", controller.getAll(Misc_PurchaseModel));
miscPurchaseRouter.get("/:id", controller.findByID(Misc_PurchaseModel));
miscPurchaseRouter.post("/:id", controller.update(Misc_PurchaseModel));
miscPurchaseRouter.delete("/:id", controller.deleteItem(Misc_PurchaseModel));

const medRestockRouter = router.Router();
medRestockRouter.post("/", controller.create(Med_RestockModel));
medRestockRouter.get("/", controller.getAll(Med_RestockModel));
medRestockRouter.get("/:id", controller.findByID(Med_RestockModel));
medRestockRouter.post("/:id", controller.update(Med_RestockModel));
medRestockRouter.delete("/:id", controller.deleteItem(Med_RestockModel));

const miscRestockRouter = router.Router();
miscRestockRouter.post("/", controller.create(Misc_RestockModel));
miscRestockRouter.get("/", controller.getAll(Misc_RestockModel));
miscRestockRouter.get("/:id", controller.findByID(Misc_RestockModel));
miscRestockRouter.post("/:id", controller.update(Misc_RestockModel));
miscRestockRouter.delete("/:id", controller.deleteItem(Misc_RestockModel));

class SupplierController {
  static ModelClass = SupplierModel;

  static getContracts() {
    return (req, res) => {
      this.ModelClass.getContracts(req.params.id, (err, data) => {
        if (err) res.status(500).send(err);
        else res.send(data);
      });
    };
  }
}

const supplierRouter = router.Router();
supplierRouter.post("/", controller.create(SupplierModel));
supplierRouter.get("/", controller.getAll(SupplierModel));
supplierRouter.get("/:id", controller.findByID(SupplierModel));
supplierRouter.get("/:id/contracts", SupplierController.getContracts());
supplierRouter.post("/:id", controller.update(SupplierModel));
supplierRouter.delete("/:id", controller.deleteItem(SupplierModel));

const contractRouter = router.Router();
contractRouter.post("/", controller.create(ContractModel));
contractRouter.get("/", controller.getAll(ContractModel));
contractRouter.get("/:id", controller.findByID(ContractModel));
contractRouter.post("/:id", controller.update(ContractModel));
contractRouter.delete("/:id", controller.deleteItem(ContractModel));

const prescriptionRouter = router.Router();
prescriptionRouter.post("/", controller.create(PrescriptionModel));
prescriptionRouter.get("/", controller.getAll(PrescriptionModel));
prescriptionRouter.get("/:id", controller.findByID(PrescriptionModel));
prescriptionRouter.post("/:id", controller.update(PrescriptionModel));
prescriptionRouter.delete("/:id", controller.deleteItem(PrescriptionModel));

const prescribedToRouter = router.Router(); // Might not need this one most likley

const billRouter = router.Router();
billRouter.post("/", controller.create(BillModel));
billRouter.get("/", controller.getAll(BillModel));
billRouter.get("/:id", controller.findByID(BillModel));
billRouter.post("/:id", controller.update(BillModel));
billRouter.delete("/:id", controller.deleteItem(BillModel));

module.exports = {
  employeeRouter,
  pharmacistRouter,
  patientRouter,
  medicineRouter,
  miscRouter,
  medicineTypeRouter,
  medPurchaseRouter,
  miscPurchaseRouter,
  medRestockRouter,
  miscRestockRouter,
  supplierRouter,
  contractRouter,
  prescriptionRouter,
  billRouter,
};
