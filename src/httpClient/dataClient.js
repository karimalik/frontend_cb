import Client from "./client";

const client = new Client({
  baseURL: "https://34f04fa1955c.ngrok.io",
  headers: {},
  body: {},
}).getInstance();

export default client;
