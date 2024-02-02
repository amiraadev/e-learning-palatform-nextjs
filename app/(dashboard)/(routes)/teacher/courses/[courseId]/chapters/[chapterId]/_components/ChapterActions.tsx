/** @format */

"use client";

import { useState } from "react";

import { Trash } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

import ConfirmModal from "@/components/modals/ConfirmModal";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ChapterActions {
	disabled: boolean;
	courseId: string;
	chapterId: string;
	isPublished: boolean;
}
const ChapterActions = ({
	disabled,
	courseId,
	chapterId,
	isPublished,
}: ChapterActions) => {
    const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const onDelete = async () => {
		try {
			setIsLoading(true);
            await axios.delete(`/api/courses/${courseId}/chapter/${chapterId}`)
            toast.success("Chapter deleted")
            router.refresh()
            router.push(`/teacher/courses/${courseId}`)
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className='flex items-center gap-x-2'>
			<Button
				onClick={() => {}}
				disabled={disabled || isLoading}
				variant='outline'
				size='sm'>
				{isPublished ? "Unpublished" : "Published"}
			</Button>
			<ConfirmModal onConfirm={onDelete}>
				<Button size='sm' disabled={isLoading}>
					<Trash className='h-4 w-4' />
				</Button>
			</ConfirmModal>
		</div>
	);
};

export default ChapterActions;
