import { create } from "apisauce";
import { toast } from "react-toastify";

export const API_URL = import.meta.env.VITE_API_URL;

const API = create({
  baseURL: `${API_URL}/api`,
  headers: {
    "content-type": "application/json",
    authorization: localStorage.getItem("token"),
  },
  timeout: 30000,
});

export const setToken = async (userToken = "") => {
  let token = userToken;

  if (!userToken) {
    token = (await localStorage.getItem("token")) || "";
  }

  API.setHeader("authorization", token);
};

setToken(false);

API.addMonitor((response) => {
  if (response.status === 401) {
    localStorage.clear();
    toast.error("Acesso negado!");
    window.location.href = "/login";
  }
});

export default API;
