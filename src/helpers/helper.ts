import { redirect } from "react-router-dom";

export function getAuthToken(): string | null {
  return window.localStorage.getItem("auth_token");
}

export function setAuthHeader(token: string | null): void {
  if (token !== null) {
    window.localStorage.setItem("auth_token", token);
  } else {
    window.localStorage.removeItem("auth_token");
  }
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/login");
  }

  return token;
}

export function checkNotAuthLoader() {
  const token = getAuthToken();

  if (token) {
    return redirect("/");
  }

  return null;
}
