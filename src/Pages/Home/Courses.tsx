import { useQuery } from 'react-query';
import ArmyCourses from './ArmyCourses';
import FirstCourses from './FirstCourses';
import SecCourses from './SecCourses';
import Sold from './Sold';
import { getCoursesWebsite, getJobs } from '../../functions';

const Courses = () => {
  // ** Handle Jobs
  // const {
  //   data: jobs,
  //   isLoading,
  //   error,
  // } = useQuery(['courses'], getCoursesWebsite);
  // const coursesData: IJobs[] = jobs?.data;
  // console.log(jobs);
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
