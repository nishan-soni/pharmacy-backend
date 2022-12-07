const express = require("express");
const cors = require("cors");
const app = express();

const {
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
} = require("./routes/routes");

app.use(cors());
app.use(express.json());
app.use("/employees", employeeRouter);
app.use("/pharmacists", pharmacistRouter);
app.use("/patients", patientRouter);
app.use("/medicine", medicineRouter);
app.use("/misc", miscRouter);
app.use("/medtypes", medicineTypeRouter);
app.use("/medpurchases", medPurchaseRouter);
app.use("/miscpurchases", miscPurchaseRouter);
app.use("/medrestocks", medRestockRouter);
app.use("/miscrestocks", miscRestockRouter);
app.use("/suppliers", supplierRouter);
app.use("/contracts", contractRouter);
app.use("/prescriptions", prescriptionRouter);
app.use("/bills", billRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
