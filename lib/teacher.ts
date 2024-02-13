export const isTeacher = (userId?: string | null) => {
  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_IDS!.split(",");
  if (userId) {
    return teacherIds.includes(userId);
  }
  // If userId is undefined or null, you might want to handle this case, e.g., by returning false or throwing an error.
  return false;
};
