import axios from "axios";

const API_BASE_URL = " http://192.168.100.22:3000/api/v1/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const fetchAllBooks = async (
  search: string,
  limit: number,
  skip: number,
  page: number,
  sort: string,
  category: string
) => {
  try {
    const { data } = await apiClient.get(
      `/books?page=${page}&limit=${limit + "&"}${
        search ? "search=" + search + "&" : "?"
      }skip=${skip}&sortOrder=${sort}&category=${category}`
    );
    return data;
  } catch (error) {
    console.error("faild to fetch books", error);
    return null;
  }
};

export const addBook = async (BookData: {
  title: string;
  category: string;
  description: string;
  definitionLanguage: string;
  termLanguage: string;
}) => {
  try {
    const { data } = await apiClient.post(`/books/add-book`, BookData);
    return data;
  } catch (error) {
    console.error("faild to add Books:", error);
  }
};
