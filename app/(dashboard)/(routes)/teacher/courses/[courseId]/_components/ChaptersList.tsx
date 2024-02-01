/** @format */

"use client";
import { Chapter } from "@prisma/client";
import React from "react";

interface ChaptersListProps {
	items: Chapter[];
	onReorder: (updateData: { id: string; position: number }[]) => void;
	onEdit: (id: string) => void;
}
const ChaptersList = ({ items, onReorder, onEdit }: ChaptersListProps) => {
	return <div>ChaptersList</div>;
};

export default ChaptersList;
