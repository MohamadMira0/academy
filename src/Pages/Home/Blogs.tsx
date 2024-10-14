import Blog from '../../components/Blog';
import TitleWithLogo from '../../components/TitleWithLogo';
import radioImage from '../../assets/courses/radio-white.png';
import Button from '../../components/Button';

export default function Blogs() {
  const dataCourse = [
    {
      title: 'عنوان المدومنة',
      description:
        'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ',
      img: radioImage,
      show: 100,
      message: 50,
      date: '2024/5/12',
    },
    {
      title: 'عنوان المدومنة',
      description:
        'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ',
      img: radioImage,
      show: 100,
      message: 50,
      date: '2024/5/12',
    },
    {
      title: 'عنوان المدومنة',
      description:
        'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ',
      img: radioImage,
      show: 100,
      message: 50,
      date: '2024/5/12',
    },
  ];

  const showCourse = dataCourse.map((course) => (
    <Blog
      img={course.img}
      title={course.title}
      description={course.description}
      date={course.date}
      show={course.show}
      message={course.message}
      button="المزيد"
    />
  ));
  return (
    <div className="mb-20">
      <TitleWithLogo title="المدونات" />
      <div className="bg-secondary2 pt-32 pb-10 ">
        <div className="lg:px-16 md:px-8 px-3">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showCourse}
          </div>

          <div className="text-center pt-20">
            <Button
              className="bg-white text-secondary rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title="معرفة المزيد"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
