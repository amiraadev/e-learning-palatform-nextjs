/** @format */

import { Category, Course } from "@prisma/client";
import {getProgress} from "@/actions/GetProgress";
import { db } from "@/lib/db";

type CourseWithProgressWithCategory = Course & {
	category: Category | null;
	chapters: {
		id: string;
	}[];
	progress: number | null;
};
type getCourses = {
	userId: string;
	title?: string;
	categoryId?: string;
};

export const GetCourses = async ({
	userId,
	title,
	categoryId,
}: getCourses): Promise<CourseWithProgressWithCategory[]> => {
	try {
		const courses = await db.course.findMany({
			where: {
				isPublished: true,
				title: {
					contains: title,
				},
				categoryId,
			},
			include: {
				category: true,
				chapters: {
					where: {
						isPublished: true,
					},
					select: {
						id: true,
					},
				},
				purchases: {
					where: {
						userId,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		const coursesWithProgress: CourseWithProgressWithCategory[] =
			await Promise.all(
				courses.map(async (course) => {
					if (course.purchases.length === 0) {
						return {
							...course,
							progress: null,
						}
					}
                    const progressPercentage = await getProgress(userId,course.id);
                    return {
                        ...course,
                        progress:progressPercentage
                    }
				})
			);
            return coursesWithProgress
	} catch (error) {
		console.log("[GET_COURSES]", error);
		return [];
	}
};
