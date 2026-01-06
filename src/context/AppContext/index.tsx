import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import secureLocalStorage from "react-secure-storage";

import { Spinner } from "components";

import fintechCore from "core";
import { useGetUserProfile } from "core/Queries/UserQueries";
import { User } from "core/Queries/UserQueries/interfaces";

type AppValuesType = {
  user?: User;
  setUser: (user?: User) => void;
  clearUser: () => void;
  isUserChecking: boolean;
};

const defaultProvider: AppValuesType = {
  user: undefined,
  setUser: () => undefined,
  clearUser: () => undefined,
  isUserChecking: false,
};

const AppContext = createContext(defaultProvider);

interface Props {
  children: ReactNode;
}

function AppProvider({ children }: Props) {
  const userToken = secureLocalStorage.getItem("accessToken");
  const apiUser = useGetUserProfile(!!userToken);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userToken) {
      if (apiUser.data) {
        // TODO: Bu kısım şimdilik supress edilecek.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(apiUser.data);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [apiUser.data, apiUser.isLoading, userToken]);

  const clearUser = () => {
    secureLocalStorage.removeItem("accessToken");
    fintechCore.queryClient.clear();
  };

  const values = useMemo(
    () => ({
      user,
      setUser,
      clearUser,
      isUserChecking: loading,
    }),
    [loading, user],
  );

  return (
    <AppContext.Provider value={values}>
      {loading && <Spinner />}

      {!loading && children}
    </AppContext.Provider>
  );
}

export { AppProvider };

// TODO: Bu kısım şimdilik supress edilecek.
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
