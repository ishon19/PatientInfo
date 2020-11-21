import React, { useState } from "react";
import server from "../services/serverService";
import MUIDataTable from "mui-datatables";
import Home from "./Home";
import PatientDetails from "./PatientDetails";

const App = () => {
  const [patientData, setPatientData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [patientDetails, setPatientDetails] = useState(null);

  const renderData = (data) => {
    /*return data.map((patient) => (
      <p key={patient.contact}>
        {patient.name} {patient.age} {patient.gender} {patient.contact}
      </p>
    )); */
    let columns = [
      {
        name: "name",
        label: "Name",
        options: {
          sort: true,
        },
      },
      {
        name: "age",
        label: "Age",
        options: {
          sort: true,
        },
      },
      {
        name: "gender",
        label: "Gender",
        options: {
          sort: true,
        },
      },
      {
        name: "contact",
        label: "Contact",
        options: {
          sort: true,
        },
      },
      {
        name: "id",
        label: "ID",
        options: {
          display: "excluded",
        },
      },
    ];

    const options = {
      filter: false,
      filterType: "checkbox",
      responsive: "standard",
      selectablerows: true,
      onRowClick: (rowData) => {
        console.log("Row clicked", rowData);
        fetchPatientDetail(rowData[4]);
      },
    };

    return (
      <MUIDataTable
        title="Patient List"
        data={data}
        columns={columns}
        options={options}
      />
    );
  };

  const onChangeHandler = (event) => {
    setPatientData([]);
    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("Data", event.target.files[0], event.target.files[0].name);
    server.uploadPatientList(formData).then((csvData) => {
      console.log(csvData);
      setPatientData(csvData);
    });
  };

  const fetchPatientDetail = (id) => {
    server
      .getPatientInfo(id)
      .then((data) => {
        setPatientDetails(data[0]);
        setShowDetails(true);
      })
      .catch((error) => console.log("Some Error Occurred"));
  };

  return (
    <div>
      {showDetails ? (
        <PatientDetails
          patientDetail={patientDetails}
          backButtonHandler={() => setShowDetails(false)}
        />
      ) : (
        <Home
          fileChangeHandler={onChangeHandler}
          patientData={patientData}
          dataRenderHandler={renderData}
        />
      )}
    </div>
  );
};

export default App;
