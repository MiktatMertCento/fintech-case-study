import {QueryClientProvider} from "@tanstack/react-query";
import {HelmetProvider} from "react-helmet-async";
import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";

import RegisterPage from "./view/AccountPages/RegisterPage";

import {AppProvider} from "context";
import fintechCore from "core";
import {AuthGuard} from "guards";
import {DashboardPage, InvoicesPage, LoginPage, LogoutPage, MyWalletsPage, SetttingsPage, TransactionsPage,} from "view";

function App() {
    return (
        <QueryClientProvider client={fintechCore.queryClient}>
            <HelmetProvider>
                <AppProvider>
                    <Toaster position="top-right"/>

                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>

                        <Route element={<AuthGuard/>}>
                            <Route path="/" element={<DashboardPage/>}/>
                            <Route path="/dashboard" element={<DashboardPage/>}/>
                            <Route path="/transactions" element={<TransactionsPage/>}/>
                            <Route path="/invoices" element={<InvoicesPage/>}/>
                            <Route path="/my-wallets" element={<MyWalletsPage/>}/>
                            <Route path="/settings" element={<SetttingsPage/>}/>
                            <Route path="/help" element={<DashboardPage/>}/>
                            <Route path="/logout" element={<LogoutPage/>}/>
                        </Route>
                    </Routes>
                </AppProvider>
            </HelmetProvider>
        </QueryClientProvider>
    );
}

export default App;
