import { ErrorMessage, Field, Form, Formik, setIn } from 'formik';
import { IInitialValuesAddLesson } from '../../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosWithToken } from '../../../Api/axios';
import { base_url_admin, Courses, LESSONS } from '../../../Api/Api';
import { showSuccess } from '../../../libs/ReactToastify';
import SubmitLoader from '../../../components/Loader/SubmitLoader';
import { useQuery } from 'react-query';
import { FaFileVideo } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AddLessonValidation } from '../../../Validation/dashboard/AddLessonValidation';
import { useState } from 'react';
import useOutsideClick from '../../../hooks/ClickOutSideDev';
import { BiSolidFilePdf } from 'react-icons/bi';
import Iframe from 'react-iframe';

const AddLesson = () => {
  const nav = useNavigate();
  const { lessonId, courseId } = useParams();
  const [inputKey, setInputKey] = useState(Date.now());
  const [open, setOpen] = useState<boolean | string>(false);

  const handleClickOutside = () => {
    setOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const { data } = useQuery({
    queryFn: () =>
      AxiosWithToken.get(
        `${base_url_admin}/${Courses}/${LESSONS}/show/${lessonId}`,
      ),
    queryKey: ['singleLesson'],
    enabled: lessonId ? true : false,
  });

  const finalData = data?.data.data;

  const initialValues: IInitialValuesAddLesson = {
    title_ar: lessonId ? finalData?.title_ar : '',
    title_en: lessonId ? finalData?.title_en : '',
    media_material: lessonId ? finalData?.media_material : null,
    video: lessonId ? finalData?.video : null,
  };

  const handleSubmit = async (values: IInitialValuesAddLesson) => {
    try {
      const formData = new FormData();
      formData.append('course_id', courseId);
      formData.append('title_ar', values.title_ar);
      formData.append('title_en', values.title_en);
      if (
        typeof values.media_material === 'string' ||
        values.media_material instanceof Blob
      ) {
        formData.append('media_material', values.media_material);
      }
      if (typeof values.video === 'string' || values.video instanceof Blob) {
        formData.append('video', values.video);
      }
      if (lessonId) {
        formData.append('_method', 'put');
      }

      const url = lessonId
        ? `${base_url_admin}/${Courses}/${LESSONS}/update/${lessonId}`
        : `${base_url_admin}/${Courses}/${LESSONS}/store`;
      await AxiosWithToken.post(url, formData);
      nav(`/dashboard/courses/${courseId}`);
      showSuccess(lessonId ? 'تم تعديل الدرس بنجاح' : 'تم إضافة الدرس بنجاح');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <Formik
        validationSchema={() => AddLessonValidation(!!lessonId)}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="title_ar"
              >
                عنوان الدرس باللغة العربية
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="عنوان الدرس باللغة العربية"
                name="title_ar"
                id="title_ar"
              />
              <ErrorMessage
                name="title_ar"
                component="div"
                className="error text-red-600 text-sm mt-2"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="title_en"
              >
                عنوان الدرس باللغة الإنكليزية
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="عنوان الدرس باللغة الإنكليزية"
                name="title_en"
                id="title_en"
              />
              <ErrorMessage
                name="title_en"
                component="div"
                className="error text-red-600 text-sm mt-2"
              />
            </div>

            {open && (
              <div className="fixed top-0 left-0 bg-black opacity-65 w-full h-full z-30"></div>
            )}
            <div onClick={(e) => e.stopPropagation()}>
              {open && (
                <>
                  <div
                    ref={ref}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md py-16 px-4 md:w-1/2 w-full z-40"
                  >
                    {open === 'file' && (
                      <video
                        src={URL.createObjectURL(values.video)}
                        width={'100%'}
                        height={'500px'}
                        controls
                      ></video>
                    )}

                    {open === 'media' && (
                      <Iframe
                        url={
                          values?.media_material instanceof Blob
                            ? URL.createObjectURL(values?.media_material)
                            : values?.media_material?.file_path
                        }
                        width="100%"
                        height="400px"
                        id=""
                        className=""
                        display="block"
                        position="relative"
                      />
                    )}
                  </div>
                </>
              )}
              <h1 className="text-3xl font-bold mb-2 mt-6">الفيديو التعليمي</h1>
              {values.video ? (
                <div className="shadow px-4 py-6 flex flex-wrap items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaFileVideo className="text-primary text-4xl" />
                    <div>
                      <h1 className="text-primary font-bold">
                        {values.video.name}
                      </h1>
                      <span className="text-gray-7 text-xs">
                        {(values?.video?.size / (1024 * 1024)).toFixed(2) +
                          'mb'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div
                      onClick={() => {
                        setFieldValue('video', null);
                        setInputKey(Date.now());
                      }}
                      className="cursor-pointer flex items-center gap-3 justify-end"
                    >
                      <span className="text-xs">حذف الملف</span>
                      <RiDeleteBin6Line />
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <label
                        htmlFor="video"
                        className="bg-primary cursor-pointer btn rounded-md text-center text-white px-6 py-1"
                      >
                        <span className="text-xs">تعديل</span>
                      </label>{' '}
                      <div
                        onClick={() => setOpen('file')}
                        className="bg-primary btn rounded-md text-center text-white px-6 py-1 cursor-pointer"
                      >
                        <span className="text-xs">عرض</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <label
                    htmlFor="video"
                    className="btn bg-primary-2 rounded-md py-3 px-6 flex items-center w-fit gap-2 mt-5 cursor-pointer"
                  >
                    <h1 className="text-white font-bold">إضافة فيديو</h1>
                    <FaFileVideo className="text-gray text-2xl" />
                  </label>
                  <ErrorMessage
                    component="div"
                    className="text-danger"
                    name="video"
                  />
                </>
              )}
              <h1 className="text-3xl font-bold mb-2 mt-6">المادة التعليمية</h1>

              {values.media_material ? (
                <>
                  <div className="shadow px-4 py-6 flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BiSolidFilePdf className="text-primary text-4xl" />
                      <div>
                        <h1 className="text-primary font-bold">
                          {values.media_material.name ||
                            values.media_material.title}
                        </h1>
                        <span className="text-gray-7 text-xs">
                          {values?.media_material?.size &&
                            (
                              values?.media_material?.size /
                              (1024 * 1024)
                            )?.toFixed(2) + 'mb'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div
                        onClick={() => {
                          setFieldValue('media_material', null);
                          setInputKey(Date.now());
                        }}
                        className="cursor-pointer flex items-center gap-3 justify-end"
                      >
                        <span className="text-xs">حذف الملف</span>
                        <RiDeleteBin6Line />
                      </div>

                      <div className="flex items-center gap-3 mt-4">
                        <label
                          htmlFor="media_material"
                          className="bg-primary cursor-pointer btn rounded-md text-center text-white px-6 py-1"
                        >
                          <span className="text-xs">تعديل</span>
                        </label>{' '}
                        <div
                          onClick={() => setOpen('media')}
                          className="bg-primary btn rounded-md text-center text-white px-6 py-1 cursor-pointer"
                        >
                          <span className="text-xs">عرض</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <label
                    htmlFor="media_material"
                    className="btn bg-primary-2 rounded-md py-3 px-6 flex items-center w-fit gap-2 mt-5 cursor-pointer"
                  >
                    <h1 className="text-white font-bold">إضافة ملف</h1>
                    <BiSolidFilePdf className="text-gray text-3xl" />
                  </label>
                  <ErrorMessage
                    component="div"
                    className="text-danger"
                    name="media_material"
                  />
                </>
              )}
            </div>

            <ErrorMessage
              name="media"
              component="div"
              className="error text-red-600 text-sm mt-2"
            />

            <input
              key={inputKey}
              className="hidden appearance-none w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
              id="video"
              type="file"
              accept="video/mp4, video/mkv"
              name="video"
              onChange={(event) => {
                const file = event.target.files && event.target.files[0];
                console.log(event);
                if (file) {
                  setFieldValue('video', file);
                }
              }}
            />

            <input
              key={inputKey + '5'}
              className="hidden appearance-none w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
              id="media_material"
              type="file"
              accept="application/pdf"
              name="media_material"
              onChange={(event) => {
                const file = event.target.files && event.target.files[0];
                console.log(event);
                if (file) {
                  setFieldValue('media_material', file);
                }
              }}
            />

            <button
              className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center mx-auto gap-2 mt-5"
              title="حفظ"
              type="submit"
              disabled={isSubmitting}
            >
              <span> حفظ</span>

              {isSubmitting && (
                <span>
                  <SubmitLoader />
                </span>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddLesson;
