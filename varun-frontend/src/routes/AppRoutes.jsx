import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Forecast from "../pages/Forecast"
import Alerts from "../pages/Alerts"
import Analytics from "../pages/Analytics"
import Reports from "../pages/Reports"
import Settings from "../pages/Settings"
import MainLayout from "../layouts/MainLayout";

function AppRoutes(){
    return(<BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<MainLayout><Dashboard/></MainLayout>}/>
        <Route path="/forecast" element={<MainLayout><Forecast/></MainLayout>}/>
        <Route path="/alerts" element={<MainLayout><Alerts/></MainLayout>}/>
        <Route path="/analytics" element={<MainLayout><Analytics/></MainLayout>}/>
        <Route path="/reports" element={<MainLayout><Reports/></MainLayout>}/>
        <Route path="/settings" element={<MainLayout><Settings/></MainLayout>}/>
        <Route path="*" element={<Navigate to="/dashboard" replace />}/>
    </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;
