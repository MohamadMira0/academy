import { useQuery } from 'react-query';
import ArmyCourses from './ArmyCourses';
import FirstCourses from './FirstCourses';
import SecCourses from './SecCourses';
import Sold from './Sold';
import { getCoursesWebsite, getJobs } from '../../functions';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Courses = () => {
  const lang: string = useSelector((state: RootState) => state.language.lang);

  // ** Handle Jobs
  const { data, isLoading, error } = useQuery(
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
  console.log(first_group);
  console.log(coursesData);
  return (
    <div>
      <FirstCourses />
      <SecCourses />
      <Sold />
      <ArmyCourses />
    </div>
  );
};

export default Courses;
