import axios from "@/plugins/axios";

const instance = axios.$http;
const subURL = "/answers";

export function getAnswers() {
  return instance
    .get(`${subURL}/`)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error;
    });
}
