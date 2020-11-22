/* eslint-disable react/prop-types */
import { Button, Card } from "@innovaccer/design-system";
import React from "react";

const PatientDetails = ({ patientDetail, backButtonHandler }) => {
  return (
    <div>
      <div className="homeContainer">
        <Card className="h-100">
          <table>
            <tbody>
              <tr>
                <td className="imp">Name</td>
                <td>{patientDetail?.name ?? "--"}</td>
              </tr>
              <tr>
                <td className="imp">Age</td>
                <td>{patientDetail?.age ?? "--"}</td>
              </tr>
              <tr>
                <td className="imp">Gender</td>
                <td>{patientDetail?.gender ?? "--"}</td>
              </tr>
              <tr>
                <td className="imp">Contact</td>
                <td>{patientDetail?.contact ?? "--"}</td>
              </tr>
              <tr>
                <td className="imp">Address</td>
                <td>{patientDetail?.address ?? "--"}</td>
              </tr>
            </tbody>
          </table>
          <Button appearance="primary" onClick={backButtonHandler}>
            Go Back
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default PatientDetails;
