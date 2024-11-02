import Course from '../../components/Course';
import TitleWithLogo from '../../components/TitleWithLogo';
import radioImage from '../../assets/courses/Radio.png';
import Button from '../../components/Button';

export default function SecCourses() {
  const dataCourse = [
    {
      name: 'اسم الكورس',
      price: '500',
      currency: 'ج.م',
      img: radioImage,
    },
    {
      name: 'اسم الكورس',
      price: '500',
      currency: 'ج.م',

      img: radioImage,
    },
    {
      name: 'اسم الكورس',
      price: '500',
      currency: 'ج.م',

      img: radioImage,
    },
  ];

  const showCourse = dataCourse.map((course, idx) => (
    <Course
      key={idx}
      img={course.img}
      name={course.name}
      price={course.price}
      currency={course.currency}
    />
  ));
  return (
    <div className="mb-20">
      <TitleWithLogo title="كورسات الفرقة الثانية" />
      <div className="bg-secondary2 pt-32 pb-10 ">
        <div className="lg:px-16 md:px-8 px-3">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-25 ">
            {showCourse}
          </div>

          <div className="text-center pt-20">
            <Button
              to="/courses/second-band"
              className="bg-white text-secondary rounded-lg px-20 py-2 hover:bg-gray-1 hover:text-primary duration-300"
              title="المزيد"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
