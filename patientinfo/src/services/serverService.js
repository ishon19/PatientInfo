import axios from "axios";

const baseUrl = "http://localhost:3002/patients";

const getPatients = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const uploadPatientList = (formData) => {
  const request = axios.post(baseUrl, formData);
  return request.then((response) => response.data);
};

const getPatientInfo = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const server = { getPatients, uploadPatientList, getPatientInfo };

export default server;
