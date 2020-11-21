import React, { useState } from "react";
import server from "../services/serverService";
import MUIDataTable from "mui-datatables";
import Home from "./Home";
import PatientDetails from "./PatientDetails";
import Notification from "./Notification";
import Header from "./Header";

const App = () => {
  const [patientData, setPatientData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [patientDetails, setPatientDetails] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const displayNotification = (message, type) => {
    setMessage(message);
    setMessageType(type);
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 1000);
  };

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
    server
      .uploadPatientList(formData)
      .then((csvData) => {
        console.log(csvData);
        setPatientData(csvData);
        displayNotification("Data Fetched Successfully", "success");
      })
      .catch((error) => {
        displayNotification("Error Fetching Details from the server, Try again", "alert");
      });
  };

  const fetchPatientDetail = (id) => {
    server
      .getPatientInfo(id)
      .then((data) => {
        setPatientDetails(data[0]);
        setShowDetails(true);
        displayNotification("Patient Details Fetched", "success");
      })
      .catch((error) =>
        displayNotification("Error Fetching Details from the server, Try again", "alert")
      );
  };

  return (
    <div>
      {showDetails ? (
        <>
          <Header title="Patient Details" />
          <Notification message={message} type={messageType} />
          <PatientDetails
            patientDetail={patientDetails}
            backButtonHandler={() => setShowDetails(false)}
          />
        </>
      ) : (
        <>
          <Header title="Patient Info Application" />
          <Notification message={message} type={messageType} />
          <Home
            fileChangeHandler={onChangeHandler}
            patientData={patientData}
            dataRenderHandler={renderData}
          />
        </>
      )}
    </div>
  );
};

export default App;
