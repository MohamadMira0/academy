import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Course from '../../components/Course';
import { useQuery } from 'react-query';
import { getProfileCoursesWebsite } from '../../functions';
import TopBar2 from '../../components/TopBar2';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { AxiosWithTokenStudent } from '../../Api/axios';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import SubmitLoader from '../../components/Loader/SubmitLoader';

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

  const { data: userFetching, isLoading } = useQuery({
    queryFn: () => AxiosWithTokenStudent.get(`/student/show-profile`),
    queryKey: ['show-User'],
  });
  const userData = userFetching?.data.data.user;
  const data = userFetching?.data.data;
  console.log(userData);
  console.log(data);

  const navigation_course: IFetchData[] = navigation_group?.data;
  const showMyFirstGroupCourses = first_course?.map((course, key) => (
    <Course
      key={key}
      id={course.id}
      media_path={course.media_path}
      title={course.title}
      profile
    />
  ));
  const showMySecondGroupCourses = second_course?.map((course, key) => (
    <Course
      key={key}
      id={course.id}
      media_path={course.media_path}
      title={course.title}
      profile
    />
  ));
  const showMyNavigationGroupCourses = navigation_course?.map((course, key) => (
    <Course
      key={key}
      id={course.id}
      media_path={course.media_path}
      title={course.title}
      profile
    />
  ));

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <SubmitLoader className="!w-10 !h-10" />
      </div>
    );
  return (
    <>
      <TopBar2 />
      <div className="flex flex-wrap flex-col items-center justify-center gap-2 lg:mt-29 md:mt-26 mt-4">
        <h1 className="md:text-3xl font-bold text-sky-600 ">
          {userData?.first_name} {userData?.last_name}
        </h1>
        <div className="mt-4 flex items-center flex-wrap gap-20">
          <div>
            <h1 className="text-sky-600">
              {lang === 'en' ? 'Email' : 'البريد اإلكتروني'}
            </h1>
            <span className="flex items-center gap-2">
              <AiOutlineMail className="text-sky-600" />
              {userData?.email}
            </span>
          </div>{' '}
          <div>
            <h1 className="text-sky-600">
              {lang === 'en' ? 'Phone' : 'رقم االهاتف'}
            </h1>
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-sky-600" />

              {userData?.phone}
            </span>
          </div>
        </div>
      </div>
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
          <div className="grid 3xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showMyFirstGroupCourses}
          </div>
        </div>
        <div className={`${typeCourses === 1 ? '' : 'hidden'}`}>
          <div className="grid 3xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showMySecondGroupCourses}
          </div>
        </div>
        <div className={`${typeCourses === 2 ? '' : 'hidden'}`}>
          <div className="grid 3xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showMyNavigationGroupCourses}
          </div>
        </div>
      </div>
      <Footer footer />
    </>
  );
};

export default Profile;
