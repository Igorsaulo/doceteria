import { create } from 'zustand';

export interface IProfile {
  userId: string | null;
  firstName: string;
  lastName: string;
  email: string;
}

type UseAuthProps = {
  access_token: string;
  profile: IProfile;
  login: (token: string) => void;
  logout: () => void;
  setProfile: (dataProfile: IProfile) => void;
};

const profile = {
  email: 'Null',
  firstName: 'Null',
  lastName: 'Null',
  userId: null,
};

export const useAuth = create<UseAuthProps>(set => ({
  profile,
  access_token: sessionStorage.getItem('accessToken') || '',
  login: token => {
    set(state => {
      sessionStorage.setItem('accessToken', token);
      return { ...state, access_token: token };
    });
  },
  logout: () => {
    set(state => {
      sessionStorage.removeItem('accessToken');
      return { ...state, access_token: '' };
    });
  },
  setProfile: (dataProfile: IProfile) => {
    set(state => {
      return {
        ...state,
        profile: dataProfile,
      };
    });
  },
}));
