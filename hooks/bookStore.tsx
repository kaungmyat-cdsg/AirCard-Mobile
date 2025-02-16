import { create } from "zustand";

type BookStore = {
  search: string;
  limit: number;
  sort: string;
  category: string;
  refreshing: boolean;
  setSearch: (search: string) => void;
  setLimit: (limit: number) => void;
  setSort: (sort: string) => void;
  setCategory: (category: string) => void;
  setRefreshing: (refreshing: boolean) => void;
};

export const useBookStore = create<BookStore>((set) => ({
  search: "",
  limit: 10,
  sort: "des",
  category: "",
  refreshing: false,
  setSearch: (search) => set({ search }),
  setLimit: (limit) => set({ limit }),
  setSort: (sort) => set({ sort }),
  setCategory: (category) => set({ category }),
  setRefreshing: (refreshing) => set({ refreshing }),
}));

export const useCardStore = create<{
  id: string;
  setId: (id: string) => void;
}>((set) => ({
  id: "",
  setId: (id) => set({ id }),
}));

type ModalStore = {
  visible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  visible: false,
  showModal: () => set({ visible: true }),
  hideModal: () => set({ visible: false }),
}));
