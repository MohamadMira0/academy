import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import { ICourseWebsite } from '../../types';

interface IProps {
  data: ICourseWebsite[];
}
export default function ArmyCourses(props: IProps) {
  const data: ICourseWebsite[] = props.data;
  const lastCourse = data?.slice(0, 1);
  const showCourse = lastCourse?.map((course) => (
    <div
      key={course?.id}
      className="flex flex-row-reverse flex-wrap-reverse container justify-center mx-auto lg:justify-between gap-4 lg:px-16 md:px-8 px-3 mb-4"
    >
      <div className="text-right lg:w-3/5  grid items-center gap-4">
        <h3 className="text-primary font-bold text-2xl">{course?.title}</h3>
        <p className="text-text-gray text-lg">{course?.description}</p>
        <div>
          <Button
            to="/courses/navigation-officers"
            className="bg-primary text-center text-white rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
            title="المزيد"
          />
        </div>
      </div>
      <div className="flex lg:justify-start justify-center w-[276px]">
        <img className="w-full" src={course?.media_path} alt="" />
      </div>
    </div>
  ));
  return (
    <div className="mb-20">
      <TitleWithLogo title="كورسات ضباط الملاحة" />
      <div>{showCourse}</div>
    </div>
  );
}
