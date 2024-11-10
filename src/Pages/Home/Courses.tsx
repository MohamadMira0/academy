import { useQuery } from 'react-query';
import ArmyCourses from './ArmyCourses';
import FirstCourses from './FirstCourses';
import SecCourses from './SecCourses';
import Sold from './Sold';
import { getCoursesWebsite } from '../../functions';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import SubmitLoader from '../../components/Loader/SubmitLoader';

const Courses = () => {
  const lang: string = useSelector((state: RootState) => state.language.lang);

  // ** Handle Jobs
  const { data, isLoading } = useQuery(
    ['courses', lang],
    () => getCoursesWebsite(lang),
    {
      keepPreviousData: true,
    },
  );
  const coursesData = data?.data;
  const first_group = coursesData?.first_group;
  const second_group = coursesData?.second_group;
  const offers = coursesData?.offers;
  const navigation_and_marine_officers =
    coursesData?.navigation_and_marine_officers;

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <SubmitLoader className="!w-10 !h-10" />
      </div>
    );
  return (
    <div>
      <FirstCourses data={first_group} />
      <SecCourses data={second_group} />
      <Sold data={offers} />
      <ArmyCourses data={navigation_and_marine_officers} />
    </div>
  );
};

export default Courses;
