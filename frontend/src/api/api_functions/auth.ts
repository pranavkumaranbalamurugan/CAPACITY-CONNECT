import { ApiPaths_Auth } from "../apiPaths";
import type { LoginResponse } from "../../models/auth";
import { axiosPost } from "../apiService";

export async function login( email: string,
  password: string
): Promise<LoginResponse> {
  const formData = new URLSearchParams();

  formData.append("username", email);
  formData.append("password", password);

  const response = await axiosPost<URLSearchParams, LoginResponse>(
    ApiPaths_Auth.login,
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const data = response.data;

  localStorage.setItem("access_token", data.access_token);

  return data;
}