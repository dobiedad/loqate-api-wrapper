# Loqate API Wrapper

## Install

`yarn add loqate-api-wrapper`

## Usage

```
const LoqateApi = require("loqate-api-wrapper");

this.api = new LoqateApi({
  key:process.env.LOQATE_API_KEY,
  countries:['US']
});
```

## Search Addresses

```
const addresses = await this.api.suggestAddresses('The white house')
```

## Get Address by id

```
await this.api.getAddress('address-id-123');
```

## Other endpoints

This wrapper only implements `Find` & `Retrieve` endpoints from the api. PR's are welcome or others can be called with

```
const options = {}
await this.api.fetch('Directions',options);
```
