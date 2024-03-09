import { create } from 'zustand';

type IGlobalLoading = {
  open: boolean;
  openLoading: () => void;
  closeLoading: () => void;
};

export const useGlobalLoading = create<IGlobalLoading>(set => ({
  open: false,
  openLoading: () => {
    set(prev => ({
      ...prev,
      open: true,
    }));
  },
  closeLoading: () => {
    set(prev => ({
      ...prev,
      open: false,
    }));
  },
}));
