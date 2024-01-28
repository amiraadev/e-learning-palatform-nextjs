import React from 'react'
import Logo from './Logo'
import SideRoutes from './SideRoutes'

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
        <div className="p-6">
            <Logo />
        </div>
        <div className="flex flex-col h-full">
            <SideRoutes />
        </div>
    </div>
  )
}

export default Sidebar