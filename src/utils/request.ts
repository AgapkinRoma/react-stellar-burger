import { onResponse } from "./on-response";

export const request = <T>(url: string, options?: RequestInit): Promise<T> => {
  return fetch(url, options).then(onResponse<T>);
};
