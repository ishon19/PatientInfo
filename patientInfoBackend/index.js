const express = require("express");
const cors = require("cors");
const multer = require("multer");
const csv = require("csvtojson");
const morgan = require("morgan");
const xlsx = require("xlsx");
const app = express();
const fileUpload = multer();

app.use(express.json());
app.use(cors());

morgan.token("payload", function body(req) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :payload"
  )
);

let data = [];

//Routes
app.get("/", (request, response) => {
  response.send("<h1>PatientInfoBackEnd</h1>");
});

app.get("/patients", (request, response) => {
  if (data.length > 0) response.status(200).json(data);
  else response.status(400).json({ error: "No Data Found" });
});

app.get("/patients/:id", (request, response) => {
  const id = request.params.id;
  console.log("ID", id, "Data:", data);
  if (id) {
    const patientInfo = data.filter((patient) => patient.id === id);
    response.status(200).json(patientInfo);
  } else {
    response.status(400).json({ error: "No Data Found" });
  }
});

app.post("/patients", fileUpload.single("Data"), (request, response) => {
  console.log("UploadInfo: ", request.file);
  data = [];
  const mimeType = request.file.mimetype;
  if (mimeType.includes("csv")) {
    const csvString = request.file.buffer.toString("utf-8");
    csv({ delimiter: "|" })
      .fromString(csvString)
      .then((rows) => {
        console.log(rows);
        data = rows;
        response.status(200).json(rows);
      })
      .catch((error) => console.error(error));
  } else {
    //XLS Parsing
    try {
      let xlsObject = xlsx.read(request.file.buffer, { type: "buffer" });
      let sheetName = xlsObject.SheetNames[0];
      let sheet = xlsObject.Sheets[sheetName];
      let sheetData = xlsx.utils.sheet_to_json(sheet);
      console.log("Sheet Data", sheetData);
      data = sheetData;
      response.status(200).json(sheetData);
    } catch (error) {
      response.status(400).json({ error: "Something went wrong" });
    }
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log("Server running at port", PORT);
});