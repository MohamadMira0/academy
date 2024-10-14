import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import janzeer from '../../assets/janzzerBlue.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import message from '../../assets/icons/message (2).svg';
import phone1 from '../../assets/icons/phone1.svg';
import profile from '../../assets/icons/profile.svg';
import { InstituteValidation } from '../../Validation/InstituteValidation';
import { ChangeEvent } from 'react';

export default function InstitutePage() {
  type InitialValuesType = {
    name: string;
    phone: number | null;
    email: string;
  };

  const initialValues: InitialValuesType = {
    name: '',
    phone: null,
    email: '',
  };

  // const { data: contact, isLoading } = useQuery({
  //   queryFn: () =>
  //     Axios.get(`${baseURL}/${Contact_Us}`, {
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
          <div className="w-10/12">
            <h1 className="text-gold text-5xl font-bold">التقديم بالمعهد</h1>
            <p className="font-bold text-gray-7 text-2xl">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
        </div>
        <div className="lg:mt-40 md:mt-18 mt-8">
          <Formik
            initialValues={initialValues}
            validationSchema={InstituteValidation}
            onSubmit={() => {}}
          >
            {({
              values,
              errors,
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <Form>
                <div className=" flex items-start gap-8 md:mb-6 mb-3">
                  <img src={profile} alt="profile" className="w-8" />
                  <div className="w-full">
                    <Field
                      // dir="rtl"
                      type="text"
                      placeholder="الاسم"
                      className="text-black text-right text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                      name="name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-sm text-red-600 mt-2 "
                    />
                  </div>
                </div>
                <div className="flex items-start gap-8 md:mb-6 mb-3">
                  <img src={message} alt="person" className="w-8" />
                  <div className="w-full">
                    <Field
                      type="email"
                      placeholder="name129@email.com"
                      className="text-black text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-600 mt-2 "
                    />
                  </div>
                </div>
                <div className=" flex items-start gap-8 md:mb-6 mb-3">
                  <img src={phone1} alt="person" className="w-8" />
                  <div className="w-full">
                    <Field
                      // dir="rtl"
                      type="tel"
                      placeholder="01100000000"
                      pattern="^[0-9\-\+\s\(\)]*$"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFieldValue(
                          'phone',
                          e.target.value.replace(/[^0-9-]/g, ''),
                        )
                      }
                      className="text-black text-right text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                      name="phone"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-sm text-red-600 mt-2 "
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button className="bg-primary text-white text-lg py-1 lg:px-16 px-8 rounded-md border border-transparent hover:bg-white hover:border-primary hover:text-primary duration-300">
                    ارسال
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer footer />
    </>
  );
}
