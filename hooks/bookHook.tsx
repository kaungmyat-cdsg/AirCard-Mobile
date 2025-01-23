import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addBook, fetchAllBooks } from "../api/api";

export const useGetAllBooks = (
  search: string,
  limit: number,
  skip: number,
  page: number,
  sort: string,
  category: string
) => {
  return useQuery({
    queryKey: ["products", search, limit, skip, page, sort, category],
    queryFn: () => fetchAllBooks(search, limit, skip, page, sort, category),
  });
};

export const useAddBook = () => {
  return useMutation({
    mutationFn: addBook,
  });
};
