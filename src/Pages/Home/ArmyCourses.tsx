import TitleWithLogo from '../../components/TitleWithLogo';
import Button from '../../components/Button';
import { ICourseWebsite } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Course from '../../components/Course';

interface IProps {
  data: ICourseWebsite[];
}
export default function ArmyCourses(props: IProps) {
  const { lang } = useSelector((state: RootState) => state.language);
  const data: ICourseWebsite[] = props.data;
  const lastCourse = data?.slice(0, 1);
  const showCourse = lastCourse?.map((course: ICourseWebsite) => (
    <Course
      key={course?.id}
      id={course?.id}
      type={'course'}
      media_path={course?.media_path}
      title={course?.title}
      description={course?.description}
      price={course?.price}
      currency={lang === 'en' ? 'EGP' : 'ج.م'}
    />
  ));
  return (
    <div className="mb-20">
      <TitleWithLogo
        title={
          lang === 'en' ? 'Navigation Officers Courses' : 'كورسات ضباط الملاحة'
        }
      />
      <div className="bg-secondary2 pt-32 pb-10 ">
        <div className="lg:px-16 md:px-8 px-3">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showCourse}
          </div>

          <div className="text-center pt-20">
            <Button
              to="/courses/navigation-officers"
              className="bg-white text-secondary rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title={lang === 'en' ? 'More' : 'المزيد'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
