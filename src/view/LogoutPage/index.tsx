import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import SplashPage from "components/BaseComponents/SplashPage";

import { useAppContext } from "context";
import { useLogout } from "core/Queries/UserQueries";

function LogoutPage() {
  const { clearUser } = useAppContext();
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      logout.mutate();
    } finally {
      clearUser();
      navigate("/login");
    }
  }, [clearUser, logout, navigate]);

  return <SplashPage />;
}

export default LogoutPage;
