/** @format */

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import SearchInput from "@/components/SearchInput";
import { GetCourses } from "@/actions/GetCourses";

import Categories from "./_components/Categories";
import CoursesList from "@/components/CoursesList";

interface SearchPageProps {
	searchParams: {
		title: string;
		categoryId: string;
	};
}
const SearchPAge = async ({ searchParams }: SearchPageProps) => {
	const { userId } = auth();

	if (!userId) {
		redirect("/");
	}

	const categories = await db.category.findMany({
		orderBy: {
			name: "asc",
		},
	});

	const courses = await GetCourses({
		userId,
		...searchParams,
	});

	return (
		<>
			<div className='px-6 pt-6 md:hidden md:mb-0 block'>
				<SearchInput />
			</div>
			<div className='p-6 space-y-4'>
				<Categories items={categories} />
				<CoursesList items={courses} />
			</div>
		</>
	);
};

export default SearchPAge;
