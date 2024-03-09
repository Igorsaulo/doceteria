import { create } from 'zustand';
import { OptionsModalEnum } from '../enums/store';

interface IModal {
  key: OptionsModalEnum | null;
  isOpen: boolean;
}

interface IModalStore {
  modals: IModal[];
  messages: {
    [key: string]: string;
  };
  openModal: (modalKey: OptionsModalEnum, messages?: any) => void;
  closeModal: (key: OptionsModalEnum) => void;
}

export const useModalStore = create<IModalStore>(set => ({
  modals: [],
  messages: {},
  openModal: (modalKey, messages) => {
    set(state => {
      if (state.modals.some(modal => modal.key === modalKey)) {
        return state;
      }
      return {
        modals: [
          ...state.modals,
          {
            key: modalKey,
            isOpen: true,
          },
        ],
        messages: messages || {},
      };
    });
  },
  closeModal: key => {
    set(state => ({
      modals: state.modals.filter(modal => modal.key !== key),
    }));
  },
}));
