import { create } from "zustand";
// import Cookies from "js-cookie";
import { User } from "../types/UserType";

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => {
    // remove cookies
    // Cookies.remove("auth-token");
    set({ user: null });
  },
}));

export default useAuthStore;
