import React, { useState } from "react";
import server from "../services/serverService";
import { Heading } from "@innovaccer/design-system";
import MUIDataTable from "mui-datatables";

const App = () => {
  const [patientData, setPatientData] = useState([]);

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
    ];

    const options = { filter: false, filterType: "checkbox", responsive: "standard" };

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

  return (
    <div>
      <header>
        <Heading size="xl" appearance="default">
          Patient Info App
        </Heading>
      </header>
      <input type="file" onChange={onChangeHandler} />
      <br />
      <h2>Patient Details</h2>
      <div>
        {patientData.length > 0 ? (
          renderData(patientData)
        ) : (
          <p>Please Upload the CSV/XLS File First</p>
        )}
      </div>
    </div>
  );
};

export default App;
