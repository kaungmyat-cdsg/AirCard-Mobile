import {
  useMutation,
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { addBook, addCard, fetchAllBooks, fetchCard } from "../api/api";

// const useInfiniteData = (
//   search: string,
//   limit: number,
//   skip: number,
//   page: number,
//   sort: string,
//   category: string
// ) => {
//   return useInfiniteQuery(
//     ["posts", { search, limit, skip, page, sort, category }], // queryKey
//     async ({ queryKey }: any) => {
//       const [, { search, limit, skip, page, sort, category }] = queryKey;
//       const data = await fetchAllBooks(
//         search,
//         limit,
//         skip,
//         page,
//         sort,
//         category
//       );
//       return data;
//     }, // queryFn
//     {
//       getNextPageParam: (lastPage: any, allPages: any) => {
//         // Implement your pagination logic here
//         return lastPage.hasNextPage ? allPages.length + 1 : undefined;
//       },
//     }
//   );
// };

// export const useGetAllBooks = ({
//   search,
//   limit,
//   sort,
//   category,
// }: {
//   search: string;
//   limit: number;
//   sort: string;
//   category: string;
// }) => {
//   return useInfiniteQuery({
//     queryKey: ["posts", { search, limit, sort, category }], // queryKey
//     queryFn: async ({ queryKey, pageParam = 1 }) => {
//       const [, { search, limit, sort, category }] = queryKey;
//       // Use pageParam for pagination
//       const data = await fetchAllBooks(
//         search,
//         limit,
//         pageParam,
//         sort,
//         category
//       );
//       return data;
//     },
//     initialPageParam: 1, // Required in React Query v5
//     getNextPageParam: (lastPage, allPages) => {
//       // Implement your pagination logic here
//       // For example, return the next page number or undefined if there are no more pages
//       return lastPage.hasNextPage ? allPages.length + 1 : undefined;
//     },
//   });
// };

export const useBooksInfiniteQuery = ({
  search,
  limit,
  sort,
  category,
}: {
  search: string;
  limit: number;
  sort: string;
  category: string;
}) => {
  return useInfiniteQuery({
    queryKey: ["books", { search, limit, sort, category }],
    queryFn: ({ pageParam = 1 }) => {
      const data = fetchAllBooks({
        search,
        limit,
        page: pageParam,
        sort,
        category,
      });
      return data;
    },
    initialPageParam: 1, // Start with page 1
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.books?.length < limit) return undefined; // No more pages
      return allPages.length + 1; // Next page number
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });
};

export const useGetCard = (bookId: string) => {
  return useQuery({
    queryKey: ["card", { bookId }],
    queryFn: () => fetchCard(bookId),
  });
};

export const useAddBook = () => {
  return useMutation({
    mutationFn: addBook,
  });
};

export const useAddCard = () => {
  return useMutation({
    mutationFn: addCard,
  });
};
