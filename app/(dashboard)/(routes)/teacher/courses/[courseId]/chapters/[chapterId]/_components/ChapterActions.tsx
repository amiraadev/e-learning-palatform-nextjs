/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

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
	return <div className="flex items-center gap-x-2">
        <Button  onClick={()=>{}} disabled={disabled} variant="outline" size="sm">
            {isPublished ? "Unpublished" : "Published"}
        </Button>
        <Button   size="sm">
            <Trash className="h-4 w-4"/>
        </Button>
    </div>;
};

export default ChapterActions;
