import TitleWithLogo from '../../components/TitleWithLogo';
import { useState } from 'react';
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
import { ICourseWebsite } from '../../types';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

interface IProps {
  data: ICourseWebsite[];
}
export default function Sold(props: IProps) {
  const data: ICourseWebsite[] = props.data;
  const { lang } = useSelector((state: RootState) => state.language);

  const [name, setName] = useState('');
  const [idCourse, setIdCourse] = useState<number | string | undefined>(
    undefined,
  );
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div className="mb-20">
      <TitleWithLogo
        title={lang === 'en' ? 'Exclusive courses' : 'كورسات حصرية'}
      />
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
          initialSlide={data?.length - 1}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{ backgroundImage: `url('${item?.media_path}')` }}
                className="z-0 bg-cover bg-center w-full bg-no-repeat h-[353px] rounded-lg"
              >
                <div className="grid grid-cols-1 h-full">
                  <div className="z-20 text-white relative">
                    <h2 className="text-right text-white pt-10 pe-10 text-2xl z-10">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex items-end px-3 justify-between flex-wrap pb-8 z-20 text-white relative content-end ">
                    <div className="flex items-center gap-1">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span>{lang === 'en' ? 'EGP' : 'ج.م'}</span>
                          <p>
                            {lang === 'en'
                              ? 'Book all courses and save'
                              : 'احجز جميع الكورسات ووفر'}
                            {item.instead_of && item?.instead_of - item?.price}
                          </p>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <span className="text-3xl font-bold">
                            {lang === 'en' ? 'EGP' : 'ج.م'}
                          </span>
                          <p className="text-3xl font-bold">{item?.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        to="/"
                        className="bg-gray-1 text-primary py-1 px-2 rounded-md text-sm hover:text-secondary3 hover:bg-white duration-300"
                        title={
                          lang === 'en'
                            ? 'More information'
                            : 'المزيد من المعلومات'
                        }
                        onClick={() => {
                          setName(item.title);
                          setIdCourse(item.id);
                          setOpenDetails(true);
                        }}
                      />
                      <Button
                        to={`/payment/${item.id}/${'offer'}`}
                        className="bg-secondary3 text-white py-1 px-5 rounded-md text-sm hover:text-secondary3 hover:bg-white duration-300"
                        title={lang === 'en' ? 'Course booking' : 'حجز الكورس'}
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
        id={idCourse}
        name={name}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
    </div>
  );
}
