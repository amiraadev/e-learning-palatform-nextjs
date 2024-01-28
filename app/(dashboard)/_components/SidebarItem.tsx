/** @format */
"use client";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface SidebarItemProps {
	icon: LucideIcon;
	label: string;
	href: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
	icon: Icon,
	label,
	href,
}: SidebarItemProps) => {
	const pathname = usePathname();
	const router = useRouter();

    const isActive = (pathname === "/" && href === "/") || (pathname === href) || (pathname?.startsWith(`${href}/`) );

	return <div>SidebarItem</div>;
};

export default SidebarItem;
