import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IoCameraOutline } from 'react-icons/io5';
import { IInitialValuesAddOffer } from '../../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosWithToken } from '../../../Api/axios';
import { base_url_admin, Courses, OFFERS } from '../../../Api/Api';
import { AddOfferValidation } from '../../../Validation/dashboard/AddCourseValidation';
import { showSuccess } from '../../../libs/ReactToastify';
import SubmitLoader from '../../../components/Loader/SubmitLoader';
import { useQuery } from 'react-query';

const AddOffer = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const { data } = useQuery({
    queryFn: () => AxiosWithToken.get(`${base_url_admin}/${OFFERS}/show/${id}`),
    queryKey: ['singleOffer'],
    enabled: id ? true : false,
  });

  const { data: coursesData } = useQuery({
    queryFn: () =>
      AxiosWithToken.get(
        `${base_url_admin}/${OFFERS}/index-courses?study_groups[0]=first group&study_groups[1]=second group&study_groups[2]=navigation and marine officers`,
      ),
    queryKey: ['list-courses'],
  });

  const finalData = data?.data.data;

  const initialValues: IInitialValuesAddOffer = {
    title_ar: id ? finalData?.title_ar : '',
    title_en: id ? finalData?.title_en : '',
    description_ar: id ? finalData?.description_ar : '',
    description_en: id ? finalData?.description_en : '',
    price_in_egypt: id ? finalData?.price_in_egypt : 0,
    instead_of_in_egypt: id ? finalData?.instead_of_in_egypt : 0,
    price_out_egypt: id ? finalData?.price_out_egypt : 0,
    instead_of_out_egypt: id ? finalData?.instead_of_out_egypt : 0,
    media: id ? finalData?.media : null,
    publish: id && finalData?.publish,
    course_ids: id ? finalData?.courses[0]?.id : 'Please Choose Course',
  };

  const handleSubmit = async (values: IInitialValuesAddOffer) => {
    try {
      const formData = new FormData();
      formData.append('title_ar', values.title_ar);
      formData.append('title_en', values.title_en);
      formData.append('description_ar', values.description_ar);
      formData.append('description_en', values.description_en);

      formData.append('price_in_egypt', values.price_in_egypt.toString());
      formData.append(
        'instead_of_in_egypt',
        values.instead_of_in_egypt.toString(),
      );
      formData.append('price_out_egypt', values.price_out_egypt.toString());
      formData.append(
        'instead_of_out_egypt',
        values.instead_of_out_egypt.toString(),
      );
      formData.append('course_ids[0]', values.course_ids.toString());

      if (typeof values.media === 'string' || values.media instanceof Blob) {
        formData.append('media', values.media);
      }

      if (id) {
        formData.append('_method', 'put');
        formData.append('publish', values.publish ? '1' : '0');
      }

      const url = id
        ? `${base_url_admin}/${OFFERS}/update/${id}`
        : `${base_url_admin}/${OFFERS}/store`;
      await AxiosWithToken.post(url, formData);
      nav('/dashboard/offers');
      showSuccess(id ? 'تم تعديل الكورس بنجاح' : 'تم إضافة الكورس بنجاح');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <Formik
        validationSchema={() => AddOfferValidation(!!id)}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
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
                  {values.media instanceof Blob ? (
                    <img
                      className=" w-[300px] h-[200px] absolute top-0 left-0 object-cover z-10"
                      src={values.media && URL.createObjectURL(values.media)}
                    />
                  ) : values.media &&
                    typeof values.media === 'object' &&
                    'file_path' in values.media ? (
                    <img
                      className="w-[300px] h-[200px] absolute top-0 left-0 object-cover z-10"
                      src={values.media.file_path as string}
                    />
                  ) : null}
                </div>

                <ErrorMessage
                  name="media"
                  component="div"
                  className="error text-red-600 text-sm mt-3"
                />
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
                className="error text-red-600 text-sm mt-3"
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
                className="error text-red-600 text-sm mt-3"
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
                className="error text-red-600 text-sm mt-3"
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
                className="error text-red-600 text-sm mt-3"
              />
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-4 mb-4">
              <div className="">
                <label
                  className="block text-lg text-primary mb-2 font-bold text-gray-700"
                  htmlFor="price_in_egypt"
                >
                  السعر بالعملة المصرية
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
                  htmlFor="instead_of_in_egypt"
                >
                  السعر بالعملة المصرية (بعد العرض)
                </label>
                <Field
                  name="instead_of_in_egypt"
                  id="instead_of_in_egypt"
                  type="number"
                  placeholder="محتوى الكورس باللغة الإنكليزية"
                  className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                  cols="30"
                  rows="6"
                  maxLength="300"
                />

                <ErrorMessage
                  name="instead_of_in_egypt"
                  component="div"
                  className="error text-red-600 text-sm"
                />
              </div>{' '}
              <div className="">
                <label
                  className="block text-lg text-primary mb-2 font-bold text-gray-700"
                  htmlFor="price_out_egypt"
                >
                  السعر خارج العملة المصرية
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
                  htmlFor="instead_of_out_egypt"
                >
                  السعر خارج العملة المصرية (بعد العرض)
                </label>
                <Field
                  name="instead_of_out_egypt"
                  id="instead_of_out_egypt"
                  type="number"
                  placeholder="محتوى الكورس باللغة الإنكليزية"
                  className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                  cols="30"
                  rows="6"
                  maxLength="300"
                />

                <ErrorMessage
                  name="instead_of_out_egypt"
                  component="div"
                  className="error text-red-600 text-sm"
                />
              </div>{' '}
            </div>
            <Field
              as="select"
              name="course_ids"
              id="course_ids"
              placeholder="محتوى الكورس باللغة الإنكليزية"
              className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
              cols="30"
              rows="6"
              maxLength="300"
            >
              <option disabled selected>
                Please Choose Course
              </option>
              {coursesData?.data.data?.map((item: any, key: number) => (
                <option key={key} value={item.id}>
                  {item.title}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="course_ids"
              component="div"
              className="error text-red-600 text-sm mt-3"
            />
            <div></div>
            {id && (
              <div className="mt-4">
                <label className="inline-flex items-center cursor-pointer">
                  <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    حالة العرض
                  </span>

                  <input
                    checked={values.publish}
                    onChange={(e) => setFieldValue('publish', e.target.checked)}
                    name="publish"
                    type="checkbox"
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-7 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                </label>
              </div>
            )}
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

export default AddOffer;
