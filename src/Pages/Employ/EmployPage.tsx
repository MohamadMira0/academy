import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import janzeer from '../../assets/janzzerBlue.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import message from '../../assets/icons/message (2).svg';
import phone1 from '../../assets/icons/phone1.svg';
import profile from '../../assets/icons/profile.svg';
import { InstituteValidation } from '../../Validation/InstituteValidation';
import { ChangeEvent } from 'react';
import image1 from '../../assets/courses/image2.png';

export default function EmployPage() {
  // const { data: contact, isLoading } = useQuery({
  //   queryFn: () =>
  //     Axios.get(`${base_url_student}/${Contact_Us}`, {
  //       headers: {
  //         'x-api-key': 'mwDA9w',
  //       },
  //     }),
  //   queryKey: ['Contact_Us'],
  // });

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
            <h1 className="text-gold text-5xl font-bold">التوظيف</h1>
            <p className="font-bold text-gray-7 text-2xl">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
        </div>
        <div className="custom-shadow px-10 py-6 flex flex-row-reverse flex-wrap-reverse rounded-3xl justify-center lg:my-28 md:my-12 my-8 lg:justify-between">
          <div className="text-right lg:w-3/5  items-center flex flex-col justify-center lg:gap-8 gap-4">
            <h3 className="text-primary font-bold text-2xl">عنوان الإعلان</h3>
            <p className="text-text-gray text-lg text-center">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
          <div className="flex lg:justify-start justify-center w-[276px]">
            <img className="w-full" src={image1} alt="" />
          </div>
        </div>
        <div className="custom-shadow px-10 py-6 flex flex-row-reverse flex-wrap-reverse rounded-3xl justify-center lg:my-28 md:my-12 my-8 lg:justify-between">
          <div className="text-right lg:w-3/5  items-center flex flex-col justify-center lg:gap-8 gap-4">
            <h3 className="text-primary font-bold text-2xl">عنوان الإعلان</h3>
            <p className="text-text-gray text-lg text-center">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
          <div className="flex lg:justify-start justify-center w-[276px]">
            <img className="w-full" src={image1} alt="" />
          </div>
        </div>
      </div>
      <Footer footer />
    </>
  );
}
