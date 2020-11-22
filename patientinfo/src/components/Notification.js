/* eslint-disable react/prop-types */
import { Toast } from "@innovaccer/design-system";
import React from "react";

const Notification = ({ message, type }) => {
  if (message === null) return null;
  return (
    <div className="mr-5 mb-8">
      <Toast appearance={type} title={message} />
    </div>
  );
};

export default Notification;
