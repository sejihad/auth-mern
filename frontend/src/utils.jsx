import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
  toast.success(msg, {
    positon: "top-right",
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    positon: "top-right",
  });
};

export const API_URL = "https://auth-mern-api-taupe.vercel.app";
