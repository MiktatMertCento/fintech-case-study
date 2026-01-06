import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./view/AccountPages/RegisterPage";

import { AppProvider } from "context";
import fintechCore from "core";
import { AuthGuard } from "guards";
import { DashboardPage, LoginPage, LogoutPage } from "view";

function App() {
  return (
    <QueryClientProvider client={fintechCore.queryClient}>
      <HelmetProvider>
        <AppProvider>
          <Toaster position="top-right" />

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<AuthGuard />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/transactions" element={<DashboardPage />} />
                <Route path="/invoices" element={<DashboardPage />} />
                <Route path="/my-wallets" element={<DashboardPage />} />
                <Route path="/settings" element={<DashboardPage />} />
                <Route path="/help" element={<DashboardPage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Route>
          </Routes>
        </AppProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
