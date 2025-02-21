import { api } from "./axios";

export const getDocumentByID = async (id: string) => {
  try {
    const response = await api.get(`/ml-documents/docs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
  }
};
