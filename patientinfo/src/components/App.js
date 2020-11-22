import React, { useEffect, useState } from "react";
import server from "../services/serverService";
import Home from "./Home";
import PatientDetails from "./PatientDetails";
import Notification from "./Notification";
import Header from "./Header";
import PatientTable from "./PatientGrid";

const App = () => {
  const [patientData, setPatientData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [patientDetails, setPatientDetails] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const displayNotification = (message, type) => {
    setMessage(message);
    setMessageType(type);
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 1000);
  };

  const renderData = (data) => {
    return <PatientTable data={data} fetchPatientDetail={fetchPatientDetail} />;
  };

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);

    //check if the file types are csv/sheets
    let fileName = event.target.files[0].name;
    if (
      !fileName.toLowerCase().includes("csv") &&
      !fileName.toLowerCase().includes("xls")
    ) {
      displayNotification("Please select xls or csv files only!", "alert");
      return;
    }
    setPatientData([]);
    setShowSpinner(true);
    const formData = new FormData();
    formData.append("Data", event.target.files[0], fileName);
    server
      .uploadPatientList(formData)
      .then((csvData) => {
        console.log(csvData);
        server.getPatients().then((serverData) => {
          if (serverData) {
            setPatientData(serverData);
            setShowSpinner(false);
            displayNotification("Data Fetched from Database", "success");
            event.target.value = null;
          }
        });
        /* setPatientData(csvData);
        displayNotification("Data Fetched Successfully", "success");
        event.target.value = null; */
      })
      .catch((error) => {
        console.error(error);
        setShowSpinner(false);
        displayNotification(`Error : ${error.response.data.error}`, "alert");
        event.target.value = null;
      });
  };

  const fetchPatientDetail = (id) => {
    setShowSpinner(true);
    server
      .getPatientInfo(id)
      .then((data) => {
        setPatientDetails(data);
        setShowDetails(true);
        setShowSpinner(false);
        displayNotification("Patient Details Fetched", "success");
      })
      .catch((error) => {
        console.error(error);
        setShowSpinner(false);
        displayNotification(
          "Error Fetching Details from the server, Try again",
          "alert"
        );
      });
  };

  useEffect(() => {
    setShowSpinner(true);
    server
      .getPatients()
      .then((serverData) => {
        if (serverData) {
          setShowSpinner(false);
          setPatientData(serverData);
          displayNotification("Stored data loaded from database", "success");
        }
      })
      .catch((error) => {
        setShowSpinner(false);
        displayNotification(`Error : ${error.response.data.error}`, "alert");
      });
  }, []);

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
            showSpinner={showSpinner}
          />
        </>
      )}
    </div>
  );
};

export default App;
