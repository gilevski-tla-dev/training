import { api } from "./axios";

export const getDocuments = async () => {
  try {
    const response = await api.get("/ml-documents/docs");
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
  }
};
