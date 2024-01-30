/** @format */

"use client";
import { BarChart, Compass, Layout, List } from "lucide-react";
import React from "react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
	{
		icon: Layout,
		label: "Dashboard",
		href: "/",
	},
	{
		icon: Compass,
		label: "Browse",
		href: "/search",
	},
];
const teacherRoutes = [
	{
		icon: List,
		label: "Courses",
		href: "/teacher/courses",
	},
	{
		icon: BarChart,
		label: "Analytics",
		href: "/teacher/analytics",
	},
];
const SideRoutes = () => {
	const pathname = usePathname();
	const isTeacherPath = pathname?.startsWith("/teacher");
	const routes = isTeacherPath ? teacherRoutes : guestRoutes;
	return (
		<div className='flex flex-col h-full'>
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};

export default SideRoutes;
