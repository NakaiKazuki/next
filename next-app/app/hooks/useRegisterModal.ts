import { create } from "zustand";
import { IRegisterModalStore } from "../types/hooks/useRegisterModal";

const useRegisterModal = create<IRegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
