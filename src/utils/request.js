import { onResponse } from "./on-response";

export const request = (url, options) => {
  return fetch(url, options).then(onResponse);
};
