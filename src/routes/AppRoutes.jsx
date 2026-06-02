import { BrowserRouter,Route,Routes } from "react-router-dom";

import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Forecast from "../pages/Forecast"
import Alerts from "../pages/Alerts"
import MainLayout from "../layouts/MainLayout";

function AppRoutes(){
    return(<BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<MainLayout><Dashboard/></MainLayout>}/>
        <Route path="/forecast" element={<MainLayout><Forecast/></MainLayout>}/>
        <Route path="/alerts" element={<MainLayout><Alerts/></MainLayout>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes;
