/* eslint-disable react/prop-types */
import React from "react";
import { Card, Message, Spinner } from "@innovaccer/design-system";

const Home = ({
  fileChangeHandler,
  patientData,
  dataRenderHandler,
  showSpinner,
}) => {
  return (
    <div>
      <div className="homeContainer">
        <h2>Patient Details</h2>
        {showSpinner ? (
          <Spinner appearance="primary" size="medium" />
        ) : (
          <Card shadow="dark">
            {patientData.length > 0 ? (
              dataRenderHandler(patientData)
            ) : (
              <Message appearance="alert" title="Data not found">
                Please upload a CSV/XLS file.
              </Message>
            )}
          </Card>
        )}
        <h2>Upload Patient List</h2>
        <Card shadow="dark" className="w-100 h-100">
          <input type="file" onChange={fileChangeHandler} />
        </Card>
      </div>
    </div>
  );
};

export default Home;
