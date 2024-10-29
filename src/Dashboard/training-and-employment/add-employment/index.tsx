import { Field, Form, Formik, FormikHelpers } from 'formik';
import Button from '../../../components/Button';
import { IInitialValuesAddJobs, IJobs } from '../../../types';
import { useMutation, useQueryClient } from 'react-query';
import { createJob } from '../../../functions';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const initialValues: IInitialValuesAddJobs = {
    title_ar: '',
    title_en: '',
    description_ar: '',
    description_en: '',
    media: null,
  };
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
        // validationSchema={LoginValidation}
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
              <input
                className="appearance-none block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
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
              ></Field>
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
              ></Field>
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
