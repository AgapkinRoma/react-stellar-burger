import { onResponse } from "./on-response";
import { baseUrl } from "../components/app/app";
import { request } from "./request";
import { IMyData } from "../services/pages/user/action";

interface RefreshData {
  success: boolean;
  refreshToken: string;
  accessToken: string;
}

export const refreshToken = (): Promise<RefreshData> => {
  return request(`${baseUrl}/api/auth/token`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

export const fetchWithRefresh = async (
  url: string,
  options: RequestInit | undefined
):Promise<IMyData> => {
  try {
    const res = await fetch(url, options);
    return await onResponse(res);
  } catch (err) {
    if (err instanceof Error && err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options = {
        ...options,
        headers: {
          ...options?.headers,
          authorization: refreshData.accessToken,
        },
      };
      const res = await fetch(url, options); //повторяем запрос
      return await onResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
