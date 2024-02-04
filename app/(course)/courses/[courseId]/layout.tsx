/** @format */
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs";
import { getProgress } from "@/actions/GetProgress";

const CourseLayout = async ({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { courseId: string };
}) => {
	const { userId } = auth();
	if (!userId) {
		return redirect("/");
	}
	const course = await db.course.findUnique({
		where: {
			id: params.courseId,
		},
		include: {
			chapters: {
				where: {
					isPublished: true,
				},
				include: {
					userProgress: {
						where: {
							userId,
						},
					},
				},
				orderBy: {
					position: "asc",
				},
			},
		},
	});

    if(!course){
        redirect("/");
    }

    const progressCount = await getProgress(userId,course.id)


	return <div className="h-full">
        <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-0">
            <CourseSidebar 
              course={course}
              progressCount={progressCount}
            />
        </div>
        <main className="md:pl-80 h-full">

        </main>
        {children}
    </div>;
};

export default CourseLayout;
