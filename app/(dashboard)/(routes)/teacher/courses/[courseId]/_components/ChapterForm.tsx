/** @format */

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Pencil, PlusCircle } from "lucide-react";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Chapter, Course } from "@prisma/client";
import ChaptersList from "./ChaptersList";

interface ChapterFormProps {
	initialData: Course & { chapters: Chapter[] };
	courseId: string;
}

const formSchema = z.object({
	title: z.string().min(1),
});
const ChapterForm: React.FC<ChapterFormProps> = ({ initialData, courseId }) => {
	const [isCreating, setIsCreating] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const toggleCreating = () => setIsCreating((current) => !current);

	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { title: "" },
	});

	const { isSubmitting, isValid } = form.formState;
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.post(`/api/courses/${courseId}/chapters`, values);
			toast.success("Chapter created");
			toggleCreating();
			router.refresh();
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<div className='mt-6 border bg-slate-100 rounded-md p-4'>
			<div className='font-medium flex items-center justify-between'>
				Course chapters
				<Button onClick={toggleCreating} variant='ghost'>
					{isCreating ? (
						<>Cancel</>
					) : (
						<>
							<PlusCircle className='h-4 w-4 mr-2' />
							Add a chapter
						</>
					)}
				</Button>
			</div>
			{isCreating && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-4 mt-4'>
						<FormField
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											disabled={isSubmitting}
											placeholder="e.g 'Introduction to the course...'"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button disabled={!isValid || isSubmitting} type='submit'>
							Create
						</Button>
					</form>
				</Form>
			)}
			{!isCreating && (
				<div
					className={cn(
						"text-sm mt-2",
						!initialData.chapters.length && "text-slate-500 italic"
					)}>
					{!initialData.chapters.length && "No chapters"}
					<ChaptersList 
					 onEdit={()=>{}}
					 onReorder={()=>{}}
					 items={initialData.chapters || []}
 					/>
				</div>
			)}
			{!isCreating && (
				<p className='text-xs text-muted-foreground mt-4'>
					Drag and drop to reorder the chapters
				</p>
			)}
		</div>
	);
};

export default ChapterForm;
