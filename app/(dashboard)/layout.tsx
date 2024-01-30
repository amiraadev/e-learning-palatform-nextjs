/** @format */

import React from "react";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full'>
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
			<div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
				<Sidebar />
			</div>
			<main className='md:pl-56 h-full'>{children}</main>
		</div>
	);
};

export default DashboardLayout;
