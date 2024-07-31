import axios from "axios";

export const apiCalls = ({ method, url, data }) => {
  return axios({
    method: method,
    url: url,
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
