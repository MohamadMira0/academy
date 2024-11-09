import Button from '../../components/Button';
import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import pdf from '../../assets/icons/pdf.svg';
import Accordion from '../../components/Inputs/Accordion';
import { Link, useParams } from 'react-router-dom';
import zoom from '../../assets/icons/zoom.svg';
import { useQuery } from 'react-query';
import { getCourseUserWebsite } from '../../functions';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import SubmitLoader from '../../components/Loader/SubmitLoader';
interface ILessons {
  id: number;
  is_done: number;
  title: string;
  media_material_path: string;
}
export default function ShowCourse() {
  const { lang } = useSelector((state: RootState) => state.language);
  const { id } = useParams();

  // ** Handlers
  const { data: fetchData, isLoading } = useQuery(
    ['one-course', lang],
    () => getCourseUserWebsite(lang, id),
    {
      keepPreviousData: true,
    },
  );
  const getVideo = (id: number) => {};

  console.log(fetchData);
  const data = fetchData?.data;
  const lessons: ILessons[] = fetchData?.data?.lessons;
  console.log(data);
  console.log(lessons);

  const data2 = lessons?.map((item, index) => (
    <Accordion key={index} title={item.title} icon={item.is_done}>
      <div className="flex items-center gap-2 justify-between bg-white rounded-xl mx-4 mb-4 p-4">
        <button
          onClick={() => getVideo(item.id)}
          className="font-bold text-gray-800 bg-primary text-white px-2 py-1 rounded-lg hover:bg-black duration-300"
        >
          {lang === 'en' ? 'show video' : 'مشاهدة الفيديو'}
        </button>
        <button className="flex flex-row-reverse items-center gap-2 bg-red-600 rounded-lg text-white px-2 py-1 hover:bg-red-800 duration-300">
          <img src={pdf} width={14} alt="iconPdf" />
          {lang === 'en' ? 'material' : 'تحميل المادة'}
        </button>
        <Button
          to={`/course/${item.id}/exam`}
          className="font-bold text-gray-800 bg-success text-white px-2 py-1 rounded-lg hover:bg-black duration-300"
          title={lang === 'en' ? 'exam' : 'الامتحان'}
        />
      </div>
    </Accordion>
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
      <div
        className="md:container lg:px-16 md:px-8 px-3 pt-20 pb-10 mx-auto"
        dir="rtl"
      >
        <div className="grid grid-cols-3">
          <div className="px-4 border-l border-gray-8">
            <div
              className="sidebar sticky top-0 h-screen overflow-y-auto bg-blue-2 rounded-xl mt-4 px-4"
              dir="ltr"
            >
              <div className="mt-4 w-full" dir="rtl">
                {data2}
              </div>
            </div>
          </div>
          <div dir="ltr" className="col-span-2 px-4">
            <div className="flex justify-center my-6">
              <img src={data?.media_path} alt="img" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-primary-2 font-bold text-xl">
                {lang === 'en' ? ' course name' : 'اسم الكورس'} :
              </h1>
              <h1 className=" font-bold text-xl">{data?.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-primary-2 font-bold text-xl">
                {lang === 'en' ? 'description' : 'الوصف'}
              </h2>
              <p className=" font-bold text-xl">{data?.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-primary-2 font-bold text-xl">
                {lang === 'en' ? 'status' : 'حالة الكورس'} :
              </h2>
              <p className=" font-bold text-xl">{data?.status}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-primary-2 font-bold text-xl">
                {lang === 'en' ? 'number lessons' : 'عدد الدروس '} :
              </h2>
              <p className=" font-bold text-xl">{data?.number_lessons}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-primary-2 font-bold text-xl">
                {lang === 'en' ? 'completed lessons' : 'عدد الدروس المكتملة'} :
              </h2>
              <p className=" font-bold text-xl">{data?.completed_lessons}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-y-3">
              <div className="flex gap-2 items-center">
                <p className="text-primary-2 font-bold text-xl">
                  {lang === 'en'
                    ? 'expire date course'
                    : 'تاريخ انتهاء صلاحية الكورس'}
                  :
                </p>
                <p className=" font-bold text-xl">{data?.expire_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-primary-2 font-bold text-xl">
                {lang === 'en'
                  ? 'Join the session with the teacher'
                  : 'انضم الى الجلسة مع المدرس'}{' '}
                :
              </p>
              <Link
                to={data?.meeting_link}
                className="bg-zoom px-4 py-2 flex items-center justify-center text-white gap-4 rounded-md "
              >
                <img src={zoom} alt="icon zoom" className="w-28" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer footer />
    </>
  );
}
