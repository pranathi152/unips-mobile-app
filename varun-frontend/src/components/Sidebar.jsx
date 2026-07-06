import { NavLink } from "react-router-dom"
import {
  FaBell,
  FaChartBar,
  FaChartLine,
  FaCog,
  FaFileAlt,
  FaHome,
} from "react-icons/fa"

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: FaHome },
  { to: "/forecast", label: "Forecast", icon: FaChartLine },
  { to: "/alerts", label: "Alerts", icon: FaBell },
  { to: "/analytics", label: "Analytics", icon: FaChartBar },
  { to: "/reports", label: "Reports", icon: FaFileAlt },
  { to: "/settings", label: "Settings", icon: FaCog },
];

function Sidebar() {
  return (
    <aside className="group/sidebar sticky top-0 flex h-screen w-20 shrink-0 flex-col self-stretch overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-4 text-white transition-[width] duration-300 ease-in-out hover:w-64">

      <div className="mb-8 flex flex-col items-center gap-1 border-b border-white/10 pb-6 group-hover/sidebar:items-start">
        <h1 className="text-xl font-bold leading-none tracking-tight">UNIPS</h1>
        <p className="hidden whitespace-nowrap text-xs text-slate-400 group-hover/sidebar:block">
          Operations Console
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2" aria-label="Main navigation">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              title={item.label}
              className={({ isActive }) =>
                isActive
                  ? "group relative flex items-center justify-center gap-3 rounded-xl bg-white/10 p-3 font-medium text-white group-hover/sidebar:justify-start"
                  : "group relative flex items-center justify-center gap-3 rounded-xl p-3 text-slate-400 transition-colors duration-150 hover:bg-white/5 hover:text-slate-100 group-hover/sidebar:justify-start"
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute inset-y-1.5 left-0 w-1 rounded-full bg-teal-400" aria-hidden="true" />
                  )}
                  <Icon
                    aria-hidden="true"
                    className={`shrink-0 text-base ${
                      isActive ? "text-teal-400" : "text-slate-500 transition-colors group-hover:text-slate-300"
                    }`}
                  />
                  <span className="hidden whitespace-nowrap group-hover/sidebar:inline">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="hidden rounded-xl bg-white/5 p-4 text-xs text-slate-400 group-hover/sidebar:block">
        <p className="whitespace-nowrap font-semibold text-slate-200">System status</p>
        <p className="mt-1 flex items-center gap-2 whitespace-nowrap">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
          All services operational
        </p>
      </div>

    </aside>
  )
}

export default Sidebar;
