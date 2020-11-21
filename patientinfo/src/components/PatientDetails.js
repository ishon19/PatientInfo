import { Button, Card } from "@innovaccer/design-system";
import React from "react";
import Header from "./Header";

const PatientDetails = ({ patientDetail, backButtonHandler }) => {
  return (
    <div className="tableContainer">
      <Header title="Patient Details" />
      <Card className="h-100">
        <table>
          <tbody>
            <tr>
              <td className="imp">Name</td>
              <td>{patientDetail.name}</td>
            </tr>
            <tr>
              <td className="imp">Age</td>
              <td>{patientDetail.age}</td>
            </tr>
            <tr>
              <td className="imp">Gender</td>
              <td>{patientDetail.gender}</td>
            </tr>
            <tr>
              <td className="imp">Address</td>
              <td>{patientDetail.address}</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Button appearance="primary" onClick={backButtonHandler}>
        Go Back
      </Button>
    </div>
  );
};

export default PatientDetails;
