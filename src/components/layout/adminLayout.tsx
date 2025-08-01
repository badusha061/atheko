import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../app-sidebar"
import AdminNavbarPage from "../adminNavbar"


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen ">
        <AppSidebar />
          <SidebarTrigger />
        <div className="flex-1 flex flex-col">
          <AdminNavbarPage />
          <main className="flex-1 w-full p-4 ">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
