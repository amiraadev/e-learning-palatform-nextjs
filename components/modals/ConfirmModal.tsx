/** @format */

"use client";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
    AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface confirmModalProps {
	children: React.ReactNode;
	onConfirm: () => void;
}
const ConfirmModal = ({ children, onConfirm }: confirmModalProps) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>
                        continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
		</AlertDialog>
	);
};

export default ConfirmModal;
