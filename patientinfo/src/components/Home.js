import React from "react";
import Header from "./Header";
import { Card } from "@innovaccer/design-system";

const Home = ({ fileChangeHandler, patientData, dataRenderHandler }) => {
  return (
    <div>
      <Header title="Patient Info Application" />
      <h2>Upload Patient List</h2>
      <Card shadow="dark" className="w-100 h-100">
        <input type="file" onChange={fileChangeHandler} />
      </Card>
      <h2>Patient Details</h2>
      <Card shadow="dark">
        {patientData.length > 0 ? (
          dataRenderHandler(patientData)
        ) : (
          <p>Please Upload the CSV/XLS File First</p>
        )}
      </Card>
    </div>
  );
};

export default Home;
