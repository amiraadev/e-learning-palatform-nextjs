/** @format */

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Pencil, PlusCircle, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Chapter, MuxData } from "@prisma/client";
import Image from "next/image";
import FileUpload from "@/components/FileUpload";

interface ChapterVideoProps {
	initialData: Chapter & { muxData?: MuxData | null };
	courseId: string;
	chapterId: string;
}

const formSchema = z.object({
	videoUrl: z.string().min(1),
});
const ChapterVideo: React.FC<ChapterVideoProps> = ({
	initialData,
	courseId,
	chapterId,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const router = useRouter();
	const toggleEdit = () => setIsEditing((current) => !current);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.patch(
				`/api/courses/${courseId}/chapters/${chapterId}`,
				values
			);
			toast.success("Chapter updated");
			toggleEdit();
			router.refresh();
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<div className='mt-6 border bg-slate-100 rounded-md p-4'>
			<div className='font-medium flex items-center justify-between'>
				Course Image
				<Button onClick={toggleEdit} variant='ghost'>
					{isEditing && <>Cancel</>}
					{!isEditing && !initialData.videoUrl && (
						<>
							<PlusCircle className='h-4 w-4 mr-2' />
							Add a video
						</>
					)}
					{!isEditing && initialData.videoUrl && (
						<>
							<Pencil className='h-4 w-4 mr-2' />
							Edit video
						</>
					)}
				</Button>
			</div>
			{!isEditing &&
				(!initialData.videoUrl ? (
					<div className='flex items-center justify-center h-60 bg-slate-200 rounded-md'>
						<Video className='h-10 w-10 text-slate-500' />
					</div>
				) : (
					<div className='relative aspect-video mt-2'>video uploaded !</div>
				))}

			{isEditing && (
				<div>
					<FileUpload
						endpoint='courseImage'
						onChange={(url) => {
							if (url) {
								onSubmit({ videoUrl: url });
							}
						}}
					/>
					<div className='text-xs text-muted-foreground mt-4'>
						16:9 aspect ratio recommended
					</div>
				</div>
			)}
		</div>
	);
};

export default ChapterVideo;
