import axios, { AxiosError, AxiosResponse } from "axios";

interface ApiError {
  message: string;
  status: number;
}
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchData(endpoint: string, params?: object) {
  try {
    const response: AxiosResponse = await apiClient.get(endpoint, { params });
    return response;
  } catch (error) {
    const apiError = handleApiError(error as AxiosError);
    throw apiError;
  }
}

export async function postData(endpoint: string, data: object) {
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

export async function loginUser(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  try {
    const response: AxiosResponse = await apiClient.post(
      "/auth/login",
      credentials
    );
    return {
      success: true,
      token: response.data.token,
      message: "Login successful",
    };
  } catch (error) {
    const apiError = handleApiError(error as AxiosError);
    return {
      success: false,
      message: apiError.message,
    };
  }
}
