import ThreadsList from "@/app/_components/ThreadsList";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Suspense } from "react";
import { Button } from "./ui/button";
import { LogIn, Search } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4 flex items-center">
          <div className="font-semibold text-purple-800">Chat Room</div>
        </div>
        <div className="px-3 py-2">
          <Button className="w-full">New Chat</Button>
        </div>
        <div className="px-3 py-2 relative">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search your threads..."
              className="w-full pl-8 pr-3 py-2 text-sm bg-transparent border-none rounded-md focus:outline-none"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
        <SidebarGroup>
          <Suspense fallback={<div>Loading threads...</div>}>
            <ThreadsList />
          </Suspense>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-8">
        <Button
          variant="secondary"
          className="pl-4 w-full bg-secondary border-2 justify-start text-purple-900"
        >
          <LogIn />
          Login
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
