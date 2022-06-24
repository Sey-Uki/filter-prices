import { CourseItem, COURSES_LIST, PriceRange } from "./models";

const filterCourses = (
  courses: CourseItem[],
  [firstPrice, secondPrice]: PriceRange // Диапазон цен для поиска
): CourseItem[] | [] => {
  if (!courses?.length) return [];

  if (firstPrice === null && secondPrice === null) return courses;

  const filteredCourses = courses.filter((course) => {
    // Диапазон цен определенного курса
    const [courseStartPrice] = course.prices;
    const [courseEndPrice] = course.prices;

    const fromZeroToNumber =
      firstPrice === null &&
      courseEndPrice! <= secondPrice! &&
      courseEndPrice !== null;

    const fromNumberToNumber =
      firstPrice !== null &&
      secondPrice !== null &&
      courseStartPrice! >= firstPrice &&
      courseEndPrice! <= secondPrice &&
      courseEndPrice !== null;

    const fromNumberToInfinity =
      secondPrice === null && courseStartPrice! >= firstPrice!;

    return fromZeroToNumber || fromNumberToNumber || fromNumberToInfinity;
  });

  return filteredCourses;
};

const requiredRange1: PriceRange = [null, 200];
const requiredRange2: PriceRange = [100, 350];
const requiredRange3: PriceRange = [200, null];
const requiredRange4: PriceRange = [null, null];

console.log(filterCourses(COURSES_LIST, requiredRange1));
console.log(filterCourses(COURSES_LIST, requiredRange2));
console.log(filterCourses(COURSES_LIST, requiredRange3));
console.log(filterCourses(COURSES_LIST, requiredRange4));
