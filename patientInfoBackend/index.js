const express = require("express");
const cors = require("cors");
const multer = require("multer");
const csv = require("csvtojson");
const app = express();
const fileUpload = multer();

app.use(express.json());
app.use(cors());

let data = [];

//Routes
app.get("/", (request, response) => {
  response.send("<h1>PatientInfoBackEnd</h1>");
});

app.get("/patients", (request, response) => {
  if (data.length > 0) response.status(200).json(data);
  else response.status(400).json({ error: "No Data Found" });
});

app.post(
  "/patients",
  fileUpload.single("Data"),
  (request, response) => {
    console.log("UploadInfo: ", request.file);
    const csvString = request.file.buffer.toString("utf-8");
    csv()
      .fromString(csvString)
      .then((rows) => {
        console.log(rows);
        data = rows;
        response.status(200).json(rows);
      })
      .catch((error) => console.error(error));
  }
);

const PORT = 3002;
app.listen(PORT, () => {
  console.log("Server running at port", PORT);
});
