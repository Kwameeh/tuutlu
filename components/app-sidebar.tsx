"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { UserIcon } from "lucide-react"


  const items = [
    {
      title: "Dashboard",
      icon: <UserIcon />,
      href: "/dashboard",
    },
    {
      title: "Assignments",
      icon: <UserIcon />,
      href: "/assignments",
    },
    {
      title: "Assessment",
      icon: <UserIcon />,
      href: "/assessment",
    },
    {
      title: "Messaging",
      icon: <UserIcon />,
      href: "/messages",
    },
    {
      title: "Classes",
      icon: <UserIcon />,
      href: "/classes",
    },
  
  ]
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>
          <h1 className="text-2xl font-bold pb-8">tuutly</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
          <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem className="font-semibold gap-2" key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && item.icon}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  