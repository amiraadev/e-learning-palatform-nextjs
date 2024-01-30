/** @format */

"use client";
// "zod" that is directly associated with Next.js :  library used for form validation or schema validation in your Next.js project
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	title: z.string().min(1, {
		message: "title is required",
	}),
});
const CreatePage = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
		},
	});

	const { isSubmitting, isValid } = form.formState;
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
	};
	return (
		<div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
			<div>
				<h1 className='text-2xl'>Name your course</h1>
				<p className='tex-sm text-slate-600'>
					What would you like to name your course ? don&apos;t worry you can
					change this later
				</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-8 mt-8'>
						<FormField
							control={form.control} // No need for control={form.control} here                 title='title'
							render={({ field }) => <FormItem>
                                <FormLabel>
                                    Course Title
                                </FormLabel>
                                <FormControl>
                                    <Input
                                      disabled={isSubmitting}
                                      placeholder="e.g 'Advanced web Development'"
                                      {...field}
                                    />
                                </FormControl>
                            </FormItem>}
						/>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default CreatePage;
