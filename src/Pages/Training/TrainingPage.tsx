import Footer from '../../components/Footer';
import TopBar2 from '../../components/TopBar2';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import message from '../../assets/icons/message (2).svg';
import phone1 from '../../assets/icons/phone1.svg';
import profile from '../../assets/icons/profile.svg';
import { InstituteValidation } from '../../Validation/pages/InstituteValidation';
import { ChangeEvent, useState } from 'react';
import image2 from '../../assets/courses/course.png';
import TitleWithLogo from '../../components/TitleWithLogo';
import Train from '../../components/Train/Train';
import StatusAlert from '../../components/Alerts/StatusAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useQuery } from 'react-query';
import { getTrainingsWebsitePage } from '../../functions';
import { trainingsWebsite } from '../../types';
import { Axios } from '../../Api/axios';
import { MdCastForEducation } from 'react-icons/md';
import { MdOutlineModelTraining } from 'react-icons/md';

export default function TrainingPage() {
  const [openDetails, setOpenDetails] = useState(false);
  type InitialValuesType = {
    name: string;
    email: string;
    phone: number | null;
    training_id: string | number;
    educational_qualification: string | null;
  };

  const initialValues: InitialValuesType = {
    name: '',
    email: '',
    phone: null,
    training_id: 1,
    educational_qualification: '',
  };
  const [alert, setAlert] = useState('');

  const { lang } = useSelector((state: RootState) => state.language);
  // ** Handle Jobs
  const { data, isLoading } = useQuery(
    ['blogs', lang],
    () => getTrainingsWebsitePage(lang),
    {
      keepPreviousData: true,
    },
  );
  const trainings: trainingsWebsite[] = data?.data?.trainings;
  const videos = data?.data?.videos;
  console.log(videos);

  const handleSubmit = async (
    values: InitialValuesType,
    { setSubmitting }: FormikHelpers<InitialValuesType>,
  ) => {
    try {
      const res = await Axios.post('/trainings/send', values);
      console.log(res);
      if (res.status === 200) {
        setAlert('success');
      }
      setOpenDetails(true);
    } catch (err) {
      console.log(err);
      setAlert('error');
      setOpenDetails(true);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <TopBar2 />
      <div className="container lg:px-16 md:px-8 px-3 mx-auto py-16" dir="rtl">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-30 gap-10">
          <div className="order-2 lg:order-1 lg:mb-16 md:mb-8 mb-6">
            <h1 className="text-gold text-5xl font-bold">
              {lang === 'en' ? 'Exercises' : 'التدريبات'}
            </h1>
            <p className="font-bold text-gray-7 text-2xl mt-10">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات
              في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها
              تعطي توزيعاَ طبيعياَ{' '}
            </p>
          </div>
          <div className="order-1">
            <img src={image2} alt="" />
          </div>
        </div>
        <div className="lg:mt-20 mt-10">
          <TitleWithLogo
            title={
              lang === 'en'
                ? 'Realistic experiences from training programs'
                : 'تجارب واقعية من برامج التدريب'
            }
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <iframe
              className="w-full h-[250px]"
              src="https://www.youtube.com/embed/c3YOpjVbz3g?si=_jDpyYup1CKNd1ly"
            ></iframe>
            {/* <Video /> */}

            <iframe
              className="w-full h-[250px]"
              src="https://www.youtube.com/embed/c3YOpjVbz3g?si=_jDpyYup1CKNd1ly"
            ></iframe>
            {/* <Video /> */}

            <iframe
              className="w-full h-[250px]"
              src="https://www.youtube.com/embed/c3YOpjVbz3g?si=_jDpyYup1CKNd1ly"
            ></iframe>
            {/* <Video /> */}
          </div>
        </div>
      </div>
      <div className="bg-secondary2 py-10 relative my-10">
        <span className="absolute top-[-3.5rem] right-0 bg-secondary2 lg:w-50 xl:w-80 sm:w-20 h-14 rounded-tl-3xl"></span>
        <div className="container lg:px-16 md:px-8 px-3 mx-auto py-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 xl:gap-30 lg:gap-20">
            {trainings?.map((training) => (
              <Train
                key={training.id}
                description={training?.description}
                title={training?.title}
                img={training?.media?.file_path}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:mt-20 mt-10">
        <TitleWithLogo
          title={lang === 'en' ? 'Former trainees' : 'المتدربون السابقون'}
        />
        <div className="bg-secondary2 py-10 relative my-10">
          <div className="container lg:px-16 md:px-8 px-3 mx-auto py-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:gap-15 lg:gap-10">
              {Array.from({ length: 9 }, (_, index) => (
                <div key={index}>
                  <img src={image2} alt="firstIntern" className="rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-20 mt-10">
        <TitleWithLogo
          title={lang === 'en' ? 'Apply for training' : 'التقديم على التدريب'}
        />
        <div
          className="container lg:px-16 md:px-8 px-3 mx-auto py-10"
          dir="rtl"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={InstituteValidation}
            onSubmit={handleSubmit}
          >
            {({
              isSubmitting,
              setFieldValue,
              /* and other goodies */
            }) => (
              <Form>
                <div className=" flex items-start gap-8 md:mb-6 mb-3">
                  <img src={profile} alt="profile" className="w-8" />
                  <div className="w-full">
                    <Field
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
                <div className=" flex items-start gap-8 md:mb-6 mb-3">
                  <MdOutlineModelTraining className="w-10 h-10 text-[#5BA3D4]" />
                  <div className="w-full">
                    <div className="text-black text-right text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3 cursor-pointer">
                      <Field
                        as="select"
                        className="border-none w-full outline-none"
                        name="training_id"
                      >
                        <option value="" disabled>
                          اسم التدريب
                        </option>
                        {trainings?.map((training) => (
                          <option value={training?.id}>
                            {training?.title}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="training_id"
                      component="div"
                      className="text-sm text-red-600 mt-2 "
                    />
                  </div>
                </div>
                <div className=" flex items-start gap-8 md:mb-6 mb-3">
                  <MdCastForEducation className="w-10 h-10 text-[#5BA3D4]" />
                  <div className="w-full">
                    <Field
                      type="text"
                      className="text-black text-right text-xl rounded-md px-6 py-2 bg-white outline-none custom-shadow w-full border-2 border-transparent duration-300 focus:border-secondary3"
                      name="educational_qualification"
                      placeholder="المؤهل الدراسي"
                    />
                    <ErrorMessage
                      name="educational_qualification"
                      component="div"
                      className="text-sm text-red-600 mt-2 "
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-10">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-primary text-white text-lg py-1 lg:px-16 px-8 rounded-md border border-transparent hover:bg-white hover:border-primary hover:text-primary duration-300"
                  >
                    {lang === 'en'
                      ? 'Apply for training'
                      : 'التقديم على التدريب'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <StatusAlert
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
        status={alert}
      />
      <Footer footer />
    </>
  );
}
