import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Course from '../../components/Course';
import { useQuery } from 'react-query';
import { getProfileCoursesWebsite } from '../../functions';
import TopBar2 from '../../components/TopBar2';
import Footer from '../../components/Footer';
import { useState } from 'react';

interface IFetchData {
  id: number;
  title: string;
  media_path: string;
}
const Profile = () => {
  const { lang } = useSelector((state: RootState) => state.language);
  const [typeCourses, setTypeCourses] = useState<number>(0);

  // ** Handlers
  const { data: first_group } = useQuery(
    ['first-group', lang],
    () => getProfileCoursesWebsite(lang, 'first group'),
    {
      keepPreviousData: true,
    },
  );
  const first_course: IFetchData[] = first_group?.data;
  // ** Handlers
  const { data: second_group } = useQuery(
    ['second-group', lang],
    () => getProfileCoursesWebsite(lang, 'second group'),
    {
      keepPreviousData: true,
    },
  );
  const second_course: IFetchData[] = second_group?.data;

  // ** Handlers
  const { data: navigation_group } = useQuery(
    ['navigation-group', lang],
    () => getProfileCoursesWebsite(lang, 'navigation and marine officers'),
    {
      keepPreviousData: true,
    },
  );
  const navigation_course: IFetchData[] = navigation_group?.data;
  console.log(first_course);
  const showMyFirstGroupCourses = first_course?.map((course) => (
    <Course
      key={course.id}
      id={course.id}
      media_path={course.media_path}
      title={course.title}
      profile
    />
  ));
  const showMySecondGroupCourses = second_course?.map((course) => (
    <Course
      key={course.id}
      id={course.id}
      media_path={course.media_path}
      title={course.title}
      profile
    />
  ));
  const showMyNavigationGroupCourses = navigation_course?.map((course) => (
    <Course
      key={course.id}
      id={course.id}
      media_path={course.media_path}
      title={course.title}
      profile
    />
  ));

  return (
    <>
      <TopBar2 />
      <div
        className="flex flex-wrap items-center justify-center gap-2 lg:mt-29 md:mt-26 mt-4"
        dir="rtl"
      >
        <button
          className={`${
            typeCourses === 0
              ? 'bg-secondary3 text-white'
              : 'bg-white text-secondary3 hover:text-white hover:bg-secondary3'
          } duration-300 rounded-lg px-20 py-2 w-full sm:w-fit`}
          onClick={() => setTypeCourses(0)}
        >
          {lang === 'en' ? 'First group courses' : 'كورسات الفرقة الأولى '}
        </button>
        <button
          className={`${
            typeCourses === 1
              ? 'bg-secondary3 text-white'
              : 'bg-white text-secondary3 hover:text-white hover:bg-secondary3'
          } duration-300 rounded-lg px-20 py-2 w-full sm:w-fit`}
          onClick={() => setTypeCourses(1)}
        >
          {lang === 'en' ? 'Second group courses' : 'كورسات الفرقة الثانية'}
        </button>
        <button
          className={`${
            typeCourses === 2
              ? 'bg-secondary3 text-white'
              : 'bg-white text-secondary3 hover:text-white hover:bg-secondary3'
          } duration-300 rounded-lg px-20 py-2 w-full sm:w-fit`}
          onClick={() => setTypeCourses(2)}
        >
          {lang === 'en'
            ? 'Navigation Officers Courses'
            : 'كورسات الفرقة الثانية'}
        </button>
      </div>
      <div
        className="container lg:px-16 md:px-8 px-3 mx-auto py-16 mt-8"
        dir="rtl"
      >
        <div className={`${typeCourses === 0 ? '' : 'hidden'}`}>
          <div className="flex flex-wrap items-center justify-between gap-2 gap-y-16">
            {showMyFirstGroupCourses}
          </div>
        </div>
        <div className={`${typeCourses === 1 ? '' : 'hidden'}`}>
          <div className="flex flex-wrap items-center justify-between gap-2 gap-y-16">
            {showMySecondGroupCourses}
          </div>
        </div>
        <div className={`${typeCourses === 2 ? '' : 'hidden'}`}>
          <div className="flex flex-wrap items-center justify-between gap-2 gap-y-16">
            {showMyNavigationGroupCourses}
          </div>
        </div>
      </div>
      <Footer footer />
    </>
  );
};

export default Profile;
