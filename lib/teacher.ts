export const isTeacher = (userId?: string | null) => {
  if (!userId) return false; // If userId is not provided, return false

  const teacherIds = process.env.NEXT_PUBLIC_TEACHER_ID?.split(",") || []; // Split the environment variable value into an array of teacher IDs

  return teacherIds.includes(userId); // Check if userId exists in the array of teacher IDs
};
