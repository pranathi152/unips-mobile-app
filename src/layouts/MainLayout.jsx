import Sidebar from "../components/Sidebar"

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="min-w-0 flex-1 bg-slate-100 overflow-auto">
        {children}
      </main>

    </div>
  )
}

export default MainLayout;
