"use client"
import { Compass, Layout } from 'lucide-react'
import React from 'react'
import SidebarItem from './SidebarItem'

const guestRouts = [
    {
        icon:Layout,
        label:"Dashboard",
        href:'/',
    },
    {
        icon:Compass,
        label:"Browse",
        href:'/search',
    },
]
const SideRoutes = () => {
    const routes = guestRouts 
  return (
    <div className='flex flex-col h-full'>{
        routes.map((route) => (
            <SidebarItem   
              key={route.href}
              icon={route.icon}
              label={route.label}
              href={route.href}
            />
        )
         )
        }</div>
  )
}

export default SideRoutes