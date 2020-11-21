import React from "react";
import { Card } from "@innovaccer/design-system";

const Home = ({ fileChangeHandler, patientData, dataRenderHandler }) => {
  return (
    <div>
      <div className="homeContainer">
        <h2>Patient Details</h2>
        <Card shadow="dark">
          {patientData.length > 0 ? (
            dataRenderHandler(patientData)
          ) : (
            <p>Please Upload the CSV/XLS File First</p>
          )}
        </Card>
        <h2>Upload Patient List</h2>
        <Card shadow="dark" className="w-100 h-100">
          <input type="file" onChange={fileChangeHandler} />
        </Card>
      </div>
    </div>
  );
};

export default Home;
