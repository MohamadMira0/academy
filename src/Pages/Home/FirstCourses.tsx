import Course from '../../components/Course';
import TitleWithLogo from '../../components/TitleWithLogo';
import radioImage from '../../assets/courses/Radio.png';
import Button from '../../components/Button';
import { CategoryCoursesType } from './CategoryCourses';

export default function FirstCourses({ data }: CategoryCoursesType) {
  console.log(data);

  // const showCourse = data.map((course: CategoryCoursesType, index: number) => (
  //   <Course
  //     img={course?.courses[index]?.image}
  //     name={course?.courses[index]?.title}
  //     price={course?.courses[index]?.price_egp}
  //     currency={course?.courses[index]?.price_sar}
  //   />
  // ));
  return (
    <div className="mb-20">
      <TitleWithLogo title="كورسات الفرقة الاولى" />
      <div className="bg-secondary2 pt-32 pb-10 ">
        <div className="lg:px-16 md:px-8 px-3">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {/* {showCourse} */}
          </div>

          <div className="text-center pt-20">
            <Button
              to="/courses/first-band"
              className="bg-white text-secondary rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title="المزيد"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
