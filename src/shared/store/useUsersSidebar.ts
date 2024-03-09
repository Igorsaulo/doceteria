import { create } from 'zustand';

interface IUsersSidebar {
  open: boolean;
  toggleSidebar: () => void;
  closedSidebar: () => void;
}

export const useUsersSidebar = create<IUsersSidebar>(set => ({
  open: false,
  toggleSidebar: () => {
    set(state => {
      return {
        ...state,
        open: !state.open,
      };
    });
  },
  closedSidebar: () => {
    set(state => {
      return {
        ...state,
        open: false,
      };
    });
  },
}));
