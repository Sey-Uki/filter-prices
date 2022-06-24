import { CourseItem, COURSES_LIST, SortIn } from "./models";

export const sortCourses = (
  courses: CourseItem[],
  sortBy: SortIn
): CourseItem[] | [] => {
  if (!courses?.length) return [];

  return [...courses].sort((a, b) => {
    // Сортировка по первому элементу массива цен по возрастанию
    if (sortBy === "asc") {
      const first = a.prices[0] === null ? 0 : a.prices[0];
      const second = b.prices[0] === null ? 0 : b.prices[0];

      return first - second;

      // Сортировка по второму элементу массива цен по убыванию
    } else if (sortBy === "desc") {
      const first = a.prices[1] === null ? Infinity : a.prices[1];
      const second = b.prices[1] === null ? Infinity : b.prices[1];

      return second - first;
    }

    return 0

  })
};

console.log(sortCourses(COURSES_LIST, 'asc'));
console.log(sortCourses(COURSES_LIST, 'desc'));