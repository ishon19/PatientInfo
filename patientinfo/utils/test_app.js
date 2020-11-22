import server from "../src/services/serverService";

const getList = () => {
  server.getPatients().then((list) => {
    return list;
  });
};

export default { getList };
