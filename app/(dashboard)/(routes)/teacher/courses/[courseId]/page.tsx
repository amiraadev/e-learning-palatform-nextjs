/** @format */

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const CourseIdPAge = async ({ params }: { params: { courseId: string } }) => {
	const { userId } = auth();
	if (!userId) {
		return redirect("/");
	}
	const course = await db.course.findUnique({
		where: {
			id: params.courseId,
		},
	});
	if (!course) {
		return redirect("/");
	}

	const requiredFields = [
		course.title,
		course.description,
		course.imageUrl,
		course.price,
		course.categoryId,
	];

	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;

	const completionText = `(${completedFields}/${totalFields})`;

	return (
		<div className='p-6'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-y-2'>
                    <h1 className="text-2xl font-medium">Course setup</h1>
                    <span className="text-sm text-slate-700">Complete all of fields {completionText}</span>
                </div>
			</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <h2 className="text-xl">
                            Customize your course
                        </h2>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default CourseIdPAge;
