import axios from "axios";

const API_BASE_URL = " http://10.11.2.245:3000/api/v1/";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const fetchAllBooks = async ({
  search,
  limit,
  page,
  sort,
  category,
}: {
  search: string;
  limit: number;
  page: number;
  sort: string;
  category: string;
}) => {
  try {
    const { data } = await apiClient.get(
      `/books?page=${page}&limit=${limit + "&"}${
        search ? "search=" + search + "&" : "?"
      }&sortOrder=${sort}&category=${category}`
    );
    return data;
  } catch (error) {
    console.error("faild to fetch books", error);
    return null;
  }
};

export const fetchCard = async (bookId: string) => {
  try {
    const { data } = await apiClient.get(`/books/card?bookId=${bookId}`);
    return data;
  } catch (error) {
    console.error("faild to fetch card", error);
    return null;
  }
};

export const addCard = async (CardData: {
  term: string;
  definition: string;
  examples: string[];
  multipleAnswers: string[];
  bookId: string;
}) => {
  try {
    const { data } = await apiClient.post(`/books/add-card`, CardData);
    return data;
  } catch (error) {
    console.error("faild to add card", error);
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
