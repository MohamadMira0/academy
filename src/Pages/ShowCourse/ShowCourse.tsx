import { useState } from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import pdf from '../../assets/icons/pdf.svg';
import trueIcon from '../../assets/icons/true.svg';
import arrowBottom from '../../assets/icons/arrowBottom.svg';
import Accordion from '../../components/Inputs/Accordion';
import { Link } from 'react-router-dom';
import whatsIconWhite from '../../assets/icons/whatsIconWhite.svg';
import zoom from '../../assets/icons/zoom.svg';

export default function ShowCourse() {
  const [focusSearch, setFocusSearch] = useState(false);
  const dummyData = [
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
    {
      title: 'اسم الوحدة',
      icon: trueIcon,
      content: [
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
        {
          name: 'اسم الوحدة',
        },
      ],
    },
  ];

  // const data = dummyData.map((course, i) => (
  //   <div
  //     key={i}
  //     className="p-4 flex items-center justify-between bg-white rounded-xl mb-4"
  //   >
  //     {/* <div className="flex items-center gap-4">
  //       <img src={course.icon} alt={`index-${i}`} />
  //       <h3>{course.name}</h3>
  //     </div>
  //     <img src={arrowBottom} alt="icon" /> */}

  //   </div>
  // ));

  interface CourseData {
    name: string;
    age: number;
  }

  const data = dummyData.map((item, index) => (
    <Accordion key={index} title={item.title} icon={item.icon}>
      {item.content.map((content, i) => (
        <div
          key={i}
          className="p-4 flex items-center justify-between bg-white rounded-xl mb-4"
        >
          <div className="flex items-center gap-2">
            <img src={item.icon} alt="icon" />
            <h3 className="font-bold text-gray-800">
              {(content as CourseData).name}
            </h3>
          </div>
        </div>
      ))}
    </Accordion>
  ));

  return (
    <>
      <TopBar2 />
      <div
        className="md:container lg:px-16 md:px-8 px-3 pt-20 pb-10 mx-auto"
        dir="rtl"
      >
        <div>
          <h1 className="text-gold text-5xl font-bold">اسم الكورس </h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="px-4 border-l border-gray-8">
            <form className="max-w-md mx-auto mt-8">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className={`${
                      focusSearch ? 'text-secondary3' : 'text-gray-8'
                    } w-4 h-4 dark:text-gray-8`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full shadow-lg p-4 ps-10 text-sm text-gray-900 border-2 border-gray-8 rounded-lg bg-gray-50 outline-none focus:border-secondary3"
                  placeholder="البحث داخل القسم."
                  onFocus={() => setFocusSearch((prev) => !prev)}
                  onBlur={() => setFocusSearch((prev) => !prev)}
                  required
                />
              </div>
            </form>
            <div
              className="sidebar sticky top-0 h-screen overflow-y-auto bg-blue-2 rounded-xl mt-4 px-4"
              dir="ltr"
            >
              <div className="mt-4 w-full" dir="rtl">
                {data}
              </div>
            </div>
          </div>
          <div className="col-span-2 px-4">
            <h2 className="text-primary font-bold text-2xl">عنوان الجزء</h2>
            <div className="flex items-center justify-between ">
              <p className="text-gray-7 text-xl">عنوان الفيديو</p>
              <button className="flex flex-row-reverse items-center gap-8 bg-red-600 rounded-lg text-white px-6 py-2 hover:bg-red-800 duration-300">
                <img src={pdf} alt="iconPdf" />
                تحميل المادة
              </button>
            </div>
            <div className="my-4 flex justify-center">
              <iframe
                className="w-full"
                width="560"
                height="450"
                src="https://www.youtube.com/embed/c3YOpjVbz3g?si=_jDpyYup1CKNd1ly"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <Button
                to="/course/1/exam"
                title="الإنتقال الى الأمتحان"
                className="bg-primary text-white py-1 px-4 rounded-md text-lg hover:bg-black duration-300"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between md:my-10 my-4 gap-y-3">
              <div className="lg:w-8/12 md:w-10/12 w-full">
                <p className="text-primary-2 font-bold text-xl">
                  هل تعاني من مشكلة في فهم الكورس ؟
                </p>
              </div>
              <div className="lg:w-3/12 md:w-2/12 w-full ">
                <Link
                  to={''}
                  className="bg-green-400 px-6 py-2 flex items-center justify-center w-full text-white gap-4 rounded-md"
                >
                  <p>تواصل معنا</p>
                  <img
                    src={whatsIconWhite}
                    alt="icon whatsApp"
                    className="w-5"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between md:my-10 my-4 gap-y-3">
              <div className="lg:w-8/12 md:w-1/12 w-full">
                <p className="text-primary-2 font-bold text-xl">
                  انضم الى الجلسة مع أ. محمد احمد
                </p>
              </div>
              <div className="lg:w-3/12 md:w-2/12 w-full">
                <Link
                  to={''}
                  className="bg-zoom px-6 py-3 flex items-center justify-center  w-full text-white gap-4 rounded-md "
                >
                  <img src={zoom} alt="icon zoom" className="w-28" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer footer />
    </>
  );
}
