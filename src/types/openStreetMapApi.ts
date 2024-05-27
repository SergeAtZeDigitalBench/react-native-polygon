interface ErrorResponse200 {
  error?: string;
}

export interface OpenStreetMapApiPayload extends ErrorResponse200 {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: Address;
  boundingbox: string[];
}

export interface Address extends Record<string, string | undefined> {
  house_number?: string;
  road?: string;
  city?: string;
  state?: string;
  postcode: string;
  country: string;
  country_code: string;
  town?: string;
  borough?: string;
  village?: string;
  suburb?: string;
}

export interface OpenStreetMapApiErrorPayload {
  error?: {
    code: number;
    message: string;
  };
}

const err = {
  code: 400,
  message: "Parameter 'lon' must be a number.",
};
