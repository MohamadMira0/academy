import TopBar2 from '../../components/TopBar2';
import janzeer from '../../assets/janzzerBlue.png';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Course from '../../components/Course';
import { useQuery } from 'react-query';
import { getCoursesFirstGroupWebsite } from '../../functions';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { ICourseWebsite } from '../../types';
export default function FirstBand() {
  const { lang } = useSelector((state: RootState) => state.language);

  // ** Handle Jobs
  const { data, isLoading } = useQuery(
    ['courses', lang],
    () => getCoursesFirstGroupWebsite(lang),
    {
      keepPreviousData: true,
    },
  );
  const coursesData: ICourseWebsite[] = data?.data;

  const showCourse = coursesData?.map((course) => (
    <Course
      key={course.id}
      media_path={course.media_path}
      title={course.title}
      price={course.price}
      currency={lang === 'en' ? 'EGP' : 'ج.م'}
    />
  ));
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <TopBar2 />
      <div className="container lg:px-16 md:px-8 px-3 mx-auto pt-16 mb-4">
        <div className="flex justify-end relative">
          <div className="absolute top-[-4rem] left-0">
            <img
              src={janzeer}
              alt="span"
              className="lg:h-[350px] md:h-[300px] sm:h-[250px] h-[250px]"
            />
          </div>
          <div className="w-10/12" dir="rtl">
            <h1 className="text-gold text-5xl font-bold mb-4">
              {lang === 'en' ? 'First Group Courses' : 'كورسات الفرقة الاولى'}
            </h1>
            <p className="font-bold text-gray-7">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-2 lg:mt-29 md:mt-26 mt-4"
          dir="rtl"
        >
          <Button
            title={lang === 'en' ? 'Courses' : 'الكورسات'}
            className="bg-secondary3 text-white hover:text-secondary3 hover:bg-white duration-300 rounded-lg px-20 py-2 w-full sm:w-fit"
          />
          <Button
            title={lang === 'en' ? 'Continue education' : 'واصل التعليم'}
            className="bg-white text-secondary3 hover:text-white hover:bg-secondary3 duration-300 rounded-lg px-20 py-2 w-full sm:w-fit"
          />
          <Button
            title={lang === 'en' ? 'Completed' : 'المنجزة'}
            className="bg-white text-secondary3 hover:text-white hover:bg-secondary3 duration-300 rounded-lg px-20 py-2 w-full sm:w-fit"
          />
        </div>
      </div>
      <div className="bg-secondary2 pt-32 pb-10 relative">
        <span className="absolute top-[-3.5rem] right-0 bg-secondary2 lg:w-50 sm:w-20 h-14 rounded-tl-3xl"></span>
        <div className="lg:px-16 md:px-8 px-3">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showCourse}
          </div>

          <div className="text-center pt-20">
            <Button
              to="/"
              className="bg-white text-secondary rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title={lang === 'en' ? 'Book all courses' : 'حجز جميع الكورسات'}
            />
          </div>
        </div>
      </div>
      <Footer footer />
    </>
  );
}
