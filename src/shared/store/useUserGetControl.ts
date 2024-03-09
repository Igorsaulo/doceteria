import { create } from 'zustand';

export type Controls = {
  page: number;
  filter: string;
};

type IUseUserGetControl = {
  controls: Controls;
  setControls: (controls: Controls) => void;
  resetState: () => void;
};

const initialState: Controls = {
  page: 1,
  filter: 'some',
};

export const useUserGetControl = create<IUseUserGetControl>(set => ({
  controls: initialState,
  setControls: controls => {
    set(state => ({ ...state, controls: controls }));
  },
  resetState: () => set(state => ({ ...state, controls: initialState })),
}));
