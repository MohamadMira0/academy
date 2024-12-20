import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import Button from '../../../components/Button';
import { IInitialValuesAddJobs } from '../../../types';
import { useMutation, useQueryClient } from 'react-query';
import { createJob } from '../../../functions';
import { useNavigate } from 'react-router-dom';
import { AddBasicValidation } from '../../../Validation/dashboard/AddBlogValidation';
import { FaRegEdit, FaRegFileImage } from 'react-icons/fa';
import { AiFillFileImage } from 'react-icons/ai';
import { useState } from 'react';

const AddJob = () => {
  const initialValues: IInitialValuesAddJobs = {
    title_ar: '',
    title_en: '',
    description_ar: '',
    description_en: '',
    media: null,
  };
  const [openImage, setOpenImage] = useState(false);
  const nav = useNavigate();
  const queryClient = useQueryClient();
  const addJobMutation = useMutation(createJob, {
    onSuccess: () => {
      queryClient.invalidateQueries(['jobs']);
    },
  });
  const handleSubmit = async (
    values: IInitialValuesAddJobs,
    { setSubmitting }: FormikHelpers<IInitialValuesAddJobs>,
  ) => {
    try {
      const formData = new FormData();
      formData.append('title_ar', values.title_ar);
      formData.append('title_en', values.title_en);
      formData.append('description_ar', values.description_ar);
      formData.append('description_en', values.description_en);
      if (values.media) {
        formData.append('media', values.media);
      }
      const res = await addJobMutation.mutateAsync(formData);
      if (res.code === 200) nav('/dashboard/jobs');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-sm border-none py-4 overflow-x-auto lg:p-16 md:p-8 p-4">
      <Formik
        validationSchema={AddBasicValidation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({
          values,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <Form>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="image"
              >
                صورة الإعلان
              </label>
              {values?.media !== null ? (
                <div className="flex items-center justify-between appearance-none text-black w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4">
                  <div className="flex items-center gap-1 text-primary">
                    <AiFillFileImage className="w-12 h-12" />
                    <span>صورة</span>
                  </div>
                  <div className="flex items-center justify-center flex-col">
                    <label
                      className="flex items-center gap-1 text-sm text-primary w-fit py-1 px-6 rounded-md cursor-pointer duration-300 hover:text-sky-800"
                      htmlFor="image"
                    >
                      <span>تغيير الصورة</span>
                      <FaRegEdit />
                    </label>
                    <input
                      className="hidden appearance-none w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                      id="image"
                      type="file"
                      name="media"
                      onChange={(event) => {
                        const file = event.currentTarget.files
                          ? event.currentTarget.files[0]
                          : null;
                        setFieldValue('media', file);
                        console.log(values);
                      }}
                    />
                    <button
                      data-modal-target="popup-modal"
                      data-modal-toggle="popup-modal"
                      className="bg-primary text-white w-fit py-1 px-6 rounded-md cursor-pointer hover:bg-sky-800 duration-300 hover:text-white"
                      onClick={() => setOpenImage(true)}
                      type="button"
                    >
                      عرض
                    </button>
                    {/* <!-- Main modal --> */}
                    <div
                      id="popup-modal"
                      tabIndex={-1}
                      className={`${
                        openImage ? '' : 'hidden'
                      } overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center md:inset-0 h-fit`}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translateY(-50%) translateX(-50%)',
                      }}
                    >
                      <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <button
                            type="button"
                            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="popup-modal"
                            onClick={() => setOpenImage(false)}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                          <div className="p-4 md:p-5 text-center">
                            <img
                              src={URL.createObjectURL(values.media as Blob)}
                              alt="image"
                              width={350}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label
                    className="flex items-center gap-1 text-md text-white bg-sky-700 w-fit py-1 px-6 rounded-md mb-4 cursor-pointer hover:bg-sky-800 duration-300 hover:text-white"
                    htmlFor="image"
                  >
                    <FaRegFileImage />
                    <span>إضافة صورة</span>
                  </label>
                  <input
                    className="hidden appearance-none w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                    id="image"
                    type="file"
                    name="media"
                    onChange={(event) => {
                      const file = event.currentTarget.files
                        ? event.currentTarget.files[0]
                        : null;
                      setFieldValue('media', file);
                    }}
                  />
                  <ErrorMessage
                    name="media"
                    component="div"
                    className="error text-red-600 text-sm"
                  />
                </div>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="title_ar"
              >
                عنوان الإعلان باللغة العربية
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="عنوان الإعلان باللغة العربية"
                name="title_ar"
                id="title_ar"
              />
              <ErrorMessage
                name="title_ar"
                component="div"
                className="error text-red-600 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="description_ar"
              >
                محتوى الإعلان باللغة العربية
              </label>
              <Field
                as="textarea"
                name="description_ar"
                id="description_ar"
                // value={values.description}
                placeholder="محتوى الإعلان باللغة العربية"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                cols="30"
                rows="6"
                maxLength="300"
              />
              <ErrorMessage
                name="description_ar"
                component="div"
                className="error text-red-600 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="title_en"
              >
                عنوان الإعلان باللغة الإنكليزية
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="عنوان الإعلان باللغة الإنكليزية"
                name="title_en"
                id="title_en"
              />
              <ErrorMessage
                name="title_en"
                component="div"
                className="error text-red-600 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="description_en"
              >
                محتوى الإعلان باللغة الإنكليزية
              </label>
              <Field
                as="textarea"
                name="description_en"
                id="description_en"
                // value={values.description}
                placeholder="محتوى الإعلان باللغة الإنكليزية"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                cols="30"
                rows="6"
                maxLength="300"
              />{' '}
              <ErrorMessage
                name="description_en"
                component="div"
                className="error text-red-600 text-sm"
              />
            </div>

            <div className="flex justify-center items-center my-4 gap-4 flex-wrap lg:mt-16 mt-8">
              <button
                className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center gap-2"
                title="حفظ"
                type="submit"
                disabled={isSubmitting}
              >
                حفظ
              </button>
              <Button
                className="bg-gray-1 text-center text-gray-7 rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white"
                title="الغاء"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddJob;
