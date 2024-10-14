import TitleWithLogo from '../../components/TitleWithLogo';
import imgCourse from '../../assets/courses/course.png';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Button from '../../components/Button';
import AlertPopUp from '../../components/AlertPopUp';

export default function Sold() {
  const [name, setName] = useState('');
  const content = [
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الثانية',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
    {
      name: 'كورسات الفرقة الأولى',
      price: 500,
      img: imgCourse,
    },
  ];

  const [openDetails, setOpenDetails] = useState(false);

  // const showCourse = dataCourse.map((course) => (
  //   <Course img={course.img} name={course.name} price={course.price} />
  // ));
  return (
    <div className="mb-20">
      <TitleWithLogo title="كورسات حصرية" />
      <div className="bg-secondary2 pt-32 pb-10 ">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={300}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={content.length - 1}
        >
          {content.map((item, index) => (
            <SwiperSlide>
              <div
                key={index}
                style={{ backgroundImage: `url('${item.img}')` }}
                className="z-0 bg-cover bg-center w-full bg-no-repeat h-[353px] rounded-lg"
              >
                <div className="grid grid-cols-1 h-full">
                  <div className="z-20 text-white relative">
                    <h2 className="text-right text-white pt-10 pe-10 text-2xl z-10">
                      {item.name}
                    </h2>
                  </div>
                  <div className="flex items-end px-3 justify-between flex-wrap pb-8 z-20 text-white relative content-end ">
                    <div className="flex items-center gap-1">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span>ج.م</span>
                          <p>احجز جميع الكورسات ووفر 100</p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-3xl font-bold">ج.م</span>
                          <p className="text-3xl font-bold">{item.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        to="/"
                        className="bg-gray-1 text-primary py-1 px-2 rounded-md text-sm hover:text-secondary3 hover:bg-white duration-300"
                        title="المزيد من المعلومات"
                        onClick={() => {
                          setName(item.name);
                          setOpenDetails(true);
                        }}
                      />
                      <Button
                        to="/payment"
                        className="bg-secondary3 text-white py-1 px-5 rounded-md text-sm hover:text-secondary3 hover:bg-white duration-300"
                        title="حجز الكورس"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg w-full h-full absolute top-0 left-0  bg-gradient-to-b from-gray-4 from-0% via-gray-5 via-50%  to-gray-6 to-100% "></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AlertPopUp
        name={name}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
    </div>
  );
}
