const httpism = require("httpism");

module.exports = class LoqateApi {
  constructor(key) {
    this._key = key;
    this._client = httpism.client(
      "https://api.addressy.com/Capture/Interactive/"
    );
  }

  async searchAddresses(query) {
    const response = await this.fetch("Find", {
      params: { Text: query, Countries: ["US"] }
    });
    return response.Items.filter(item => item.Type === "Address");
  }

  async getAddress(addressId) {
    const response = await this.fetch("Retrieve", {
      params: { Id: addressId }
    });
    return response.Items[0];
  }

  async fetch(endPoint, options) {
    options.params.Key = this._key;
    return this._client.get(`${endPoint}/v1.00/json3.ws`, options);
  }
};
