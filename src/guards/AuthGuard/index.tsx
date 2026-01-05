import { useEffect } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

import { useAppContext } from "context/AppContext";

import fintechCore from "core";

function AuthGuard() {
  const navigate = useNavigate();
  const { user, isUserChecking } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    if (!user && !isUserChecking) {
      const redirectURL = `/login?page=${location.pathname}${location.search}`;
      navigate(redirectURL, { replace: true });

      secureLocalStorage.removeItem("accessToken");
      fintechCore.queryClient.clear();
    }
  }, [isUserChecking, location.pathname, location.search, navigate, user]);

  if (!user && !isUserChecking) {
    return null;
  }

  return <Outlet />;
}

export default AuthGuard;
