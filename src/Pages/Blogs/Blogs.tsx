import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import janzeer from '../../assets/janzzerBlue.png';
import Blog from '../../components/Blog';
import { useQuery } from 'react-query';
import { formatDate, getBlogsWebsite } from '../../functions';
import { IBlogs } from '../../types';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

export default function Blogs() {
  const { lang } = useSelector((state: RootState) => state.language);
  // ** Handle Jobs
  const { data, isLoading } = useQuery(
    ['blogs', lang],
    () => getBlogsWebsite(lang),
    {
      keepPreviousData: true,
    },
  );
  const blogs: IBlogs[] = data?.data;
  const showCourse = blogs?.map((blog) => (
    <Blog
      key={blog?.id}
      img={blog?.media.file_path}
      title={blog?.title_ar}
      description={blog?.description_ar}
      date={formatDate(blog?.updated_at)}
      show={200}
      message={10}
      button={lang === 'en' ? 'Learn more' : 'معرفة المزيد'}
    />
  ));
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <TopBar2 />
      <div className="container lg:px-16 md:px-8 px-3 mx-auto py-16" dir="rtl">
        <div className="flex justify-start relative">
          <div className="absolute top-[-4rem] left-0">
            <img
              src={janzeer}
              alt="span"
              className="lg:h-[350px] md:h-[300px] sm:h-[250px] h-[250px]"
            />
          </div>
          <div className="w-10/12 lg:mb-16 md:mb-8 mb-6">
            <h1 className="text-gold text-5xl font-bold mb-8"> المدونات</h1>
            <p className="font-bold text-gray-7 text-2xl">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="bg-secondary2 py-10 relative my-10">
          <span className="absolute top-[-3.5rem] right-0 bg-secondary2 lg:w-50 xl:w-80 sm:w-20 h-14 rounded-tl-3xl"></span>
          <div className="lg:px-16 md:px-8 px-3">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-15 gap-10 ">
              {showCourse}
            </div>

            {/* <div className="text-center pt-20">
              <Button
                className="bg-white text-secondary rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
                title={lang ==="en" ? "Learn more":"معرفة المزيد"}
              />
            </div> */}
          </div>
        </div>
      </div>
      <Footer footer />
    </>
  );
}
