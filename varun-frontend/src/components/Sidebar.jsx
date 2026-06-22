import { NavLink } from "react-router-dom"
import { FaChartBar, FaChartLine, FaBell, FaHome } from "react-icons/fa"

function Sidebar() {
  return (

    <div className="h-screen w-20 shrink-0 bg-gray-900 p-3 text-white md:w-64 md:p-5">

      <h1 className="mb-8 text-center text-xl font-bold md:text-left">
        UNIPS
      </h1>
      <br/>

      <nav className="flex flex-col gap-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-3 rounded-lg bg-slate-800 p-3 text-white md:justify-start"
              : "flex items-center justify-center gap-3 rounded-lg p-3 text-slate-300 hover:bg-slate-800 md:justify-start"
          }
        >
          <FaHome />
          <span className="hidden md:inline">Dashboard</span>
        </NavLink>


        <NavLink
          to="/forecast"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-3 rounded-lg bg-slate-800 p-3 text-white md:justify-start"
              : "flex items-center justify-center gap-3 rounded-lg p-3 text-slate-300 hover:bg-slate-800 md:justify-start"
          }
        >
          <FaChartLine />
          <span className="hidden md:inline">Forecast</span>
        </NavLink>


        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-3 rounded-lg bg-slate-800 p-3 text-white md:justify-start"
              : "flex items-center justify-center gap-3 rounded-lg p-3 text-slate-300 hover:bg-slate-800 md:justify-start"
          }
        >
          <FaBell />
          <span className="hidden md:inline">Alerts</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-3 rounded-lg bg-slate-800 p-3 text-white md:justify-start"
              : "flex items-center justify-center gap-3 rounded-lg p-3 text-slate-300 hover:bg-slate-800 md:justify-start"
          }
        >
          <FaChartBar />
          <span className="hidden md:inline">Analytics</span>
        </NavLink>

      </nav>

    </div>
  )
}

export default Sidebar;
