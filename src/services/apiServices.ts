import axios, { AxiosError, AxiosResponse } from "axios";

interface ApiError {
  message: string;
  status: number;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchData<T>(endpoint: string, params?: object) {
  try {
    const response: AxiosResponse = await apiClient.get(endpoint, { params });
    return response;
  } catch (error) {
    const apiError = handleApiError(error as AxiosError);
    throw apiError;
  }
}

export async function postData<T>(endpoint: string, data: object) {
  try {
    const response: AxiosResponse = await apiClient.post(endpoint, data);
    return response;
  } catch (error) {
    const apiError = handleApiError(error as AxiosError);
    throw apiError;
  }
}

function handleApiError(error: AxiosError): ApiError {
  if (error.response) {
    return {
      message: "An error occurred",
      status: error.response.status,
    };
  }
  return {
    message: error.message || "Network error",
    status: 500,
  };
}
