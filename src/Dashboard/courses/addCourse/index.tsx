import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { IoCameraOutline } from 'react-icons/io5';
import { IInitialValuesAddCourse } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { AxiosWithToken } from '../../../Api/axios';
import { base_url_admin, Courses } from '../../../Api/Api';
import { AddCourseValidation } from '../../../Validation/dashboard/AddCourseValidation';
import { showSuccess } from '../../../libs/ReactToastify';

const AddCourse = () => {
  const initialValues: IInitialValuesAddCourse = {
    title_ar: '',
    title_en: '',
    description_ar: '',
    description_en: '',
    study_group: 'first group',
    type_payment: 'free',
    price_in_egypt: 0,
    price_out_egypt: 0,
    number_months: 0,
    media: null,
  };

  const nav = useNavigate();

  const handleSubmit = async (values: IInitialValuesAddCourse) => {
    try {
      const formData = new FormData();
      formData.append('title_ar', values.title_ar);
      formData.append('title_en', values.title_en);
      formData.append('description_ar', values.description_ar);
      formData.append('description_en', values.description_en);
      formData.append('study_group', values.study_group);
      formData.append('type_payment', values.type_payment);
      formData.append('price_in_egypt', values.price_in_egypt);
      formData.append('price_out_egypt', values.price_out_egypt);
      formData.append('number_months', values.number_months);
      if (values.media) {
        formData.append('media', values.media);
      }
      await AxiosWithToken.post(`${base_url_admin}/${Courses}/store`, formData);
      nav('/dashboard/courses');
      showSuccess('تم إضافة الكورس بنجاح');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <Formik
        validationSchema={AddCourseValidation}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <div>
              <label
                className="flex flex-col items-center gap-1 text-center w-fit mx-auto px-6 rounded-md mb-4 cursor-pointer"
                htmlFor="image"
              >
                <p className="font-bold text-lg mb-2">صورة الكورس</p>
                <div className="relative w-[300px] h-[200px] bg-gray-1">
                  <div className="bg-black opacity-0 w-full h-full absolute top-0 left-0 hover:opacity-20 z-30 transition-all"></div>
                  <IoCameraOutline className="text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" />
                  {typeof (values.media === Blob) && (
                    <img
                      className=" w-[300px] h-[200px] absolute top-0 left-0 object-cover z-10"
                      src={values.media && URL.createObjectURL(values.media)}
                    />
                  )}
                </div>
              </label>
              <input
                className="hidden appearance-none w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                id="image"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                name="media"
                onChange={(event) => {
                  const file = event.target.files && event.target.files[0];
                  if (file) {
                    setFieldValue('media', file);
                  }
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="title_ar"
              >
                عنوان الكورس باللغة العربية
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="عنوان الكورس باللغة العربية"
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
                htmlFor="title_en"
              >
                عنوان الكورس باللغة الإنكليزية
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="عنوان الكورس باللغة الإنكليزية"
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
                htmlFor="description_ar"
              >
                محتوى الكورس باللغة العربية
              </label>
              <Field
                as="textarea"
                name="description_ar"
                id="description_ar"
                // value={values.description}
                placeholder="محتوى الكورس باللغة العربية"
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
                htmlFor="description_en"
              >
                محتوى الكورس باللغة الإنكليزية
              </label>
              <Field
                as="textarea"
                name="description_en"
                id="description_en"
                // value={values.description}
                placeholder="محتوى الكورس باللغة الإنكليزية"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                cols="30"
                rows="6"
                maxLength="300"
              />
              <ErrorMessage
                name="description_en"
                component="div"
                className="error text-red-600 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="study_group"
              >
                الفرقة
              </label>
              <Field
                as="select"
                name="study_group"
                id="study_group"
                // value={values.description}
                placeholder="محتوى الكورس باللغة الإنكليزية"
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                cols="30"
                rows="6"
                maxLength="300"
              >
                <option value="first group">الفرقة الأولى</option>
                <option value="second group">الفرقة الثانية</option>
                <option value="navigation and marine officers">
                  ضباط الملاحة
                </option>
              </Field>
              <ErrorMessage
                name="study_group"
                component="div"
                className="error text-red-600 text-sm"
              />
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-4 mb-4">
              <div className="">
                <label
                  className="block text-lg text-primary mb-2 font-bold text-gray-700"
                  htmlFor="type_payment"
                >
                  حالة الكورس
                </label>
                <Field
                  as="select"
                  name="type_payment"
                  id="type_payment"
                  placeholder="محتوى الكورس باللغة الإنكليزية"
                  className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                  cols="30"
                  rows="6"
                  maxLength="300"
                >
                  <option value="free">مجاني</option>
                  <option value="payed">غير مجاني</option>
                </Field>
                <ErrorMessage
                  name="type_payment"
                  component="div"
                  className="error text-red-600 text-sm"
                />
              </div>{' '}
              {values.type_payment === 'payed' && (
                <>
                  <div className="">
                    <label
                      className="block text-lg text-primary mb-2 font-bold text-gray-700"
                      htmlFor="price_in_egypt"
                    >
                      السعر
                    </label>
                    <Field
                      name="price_in_egypt"
                      id="price_in_egypt"
                      type="number"
                      placeholder="محتوى الكورس باللغة الإنكليزية"
                      className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                      cols="30"
                      rows="6"
                      maxLength="300"
                    />

                    <ErrorMessage
                      name="price_in_egypt"
                      component="div"
                      className="error text-red-600 text-sm"
                    />
                  </div>{' '}
                  <div className="">
                    <label
                      className="block text-lg text-primary mb-2 font-bold text-gray-700"
                      htmlFor="price_out_egypt"
                    >
                      السعر
                    </label>
                    <Field
                      name="price_out_egypt"
                      id="price_out_egypt"
                      type="number"
                      placeholder="محتوى الكورس باللغة الإنكليزية"
                      className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                      cols="30"
                      rows="6"
                      maxLength="300"
                    />

                    <ErrorMessage
                      name="price_out_egypt"
                      component="div"
                      className="error text-red-600 text-sm"
                    />
                  </div>{' '}
                  <div className="">
                    <label
                      className="block text-lg text-primary mb-2 font-bold text-gray-700"
                      htmlFor="number_months"
                    >
                      عدد الأيام
                    </label>
                    <Field
                      name="number_months"
                      id="number_months"
                      type="number"
                      placeholder="محتوى الكورس باللغة الإنكليزية"
                      className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                      cols="30"
                      rows="6"
                      maxLength="300"
                    />

                    <ErrorMessage
                      name="number_months"
                      component="div"
                      className="error text-red-600 text-sm"
                    />
                  </div>
                </>
              )}
            </div>

            <button
              className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center mx-auto gap-2 mt-5"
              title="حفظ"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting && 'Loading'}
              حفظ
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCourse;
