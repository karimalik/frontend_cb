import axios from "axios";
import merge from "lodash/merge";

const commonOptions = {
  baseURL: null,
  headers: {},
};

class Client {
  client = null;
  options = {};
  constructor(customOptions = {}) {
    this.options = merge(commonOptions, customOptions);
    this.client = axios.create(this.options);
  }

  getInstance() {
    return this.client;
  }
}

export default Client;
