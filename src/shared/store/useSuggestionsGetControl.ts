import { create } from 'zustand';

type Controls = {
  page: number;
};

type IControl = {
  controls: Controls;
  setControls: (controls: Controls) => void;
  resetState: () => void;
};

const initialState: Controls = {
  page: 1,
};

export const useSuggestionsGetControl = create<IControl>(set => ({
  controls: initialState,
  setControls: controls => {
    set(state => ({ ...state, controls: controls }));
  },
  resetState: () => set(state => ({ ...state, controls: initialState })),
}));
