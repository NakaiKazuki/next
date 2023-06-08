import { create } from "zustand";
import { IModalStore } from "../types/hooks/modalStore";

const useRentModal = create<IModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModal;
