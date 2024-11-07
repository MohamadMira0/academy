import { ErrorMessage, Field, FieldArray, Form, Formik, setIn } from 'formik';
import { IInitialValuesAddQuiz } from '../../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosWithToken } from '../../../Api/axios';
import { base_url_admin, Courses, LESSONS, QUIZES } from '../../../Api/Api';
import { showSuccess } from '../../../libs/ReactToastify';
import SubmitLoader from '../../../components/Loader/SubmitLoader';
import { useQuery } from 'react-query';
import { AddQuizValidation } from '../../../Validation/dashboard/AddQuizValidation';
import { FaPlus } from 'react-icons/fa6';

const AddQuiz = () => {
  const nav = useNavigate();
  const { lessonId, courseId, quizId } = useParams();

  const { data } = useQuery({
    queryFn: () =>
      AxiosWithToken.get(
        `${base_url_admin}/${Courses}/${LESSONS}/${QUIZES}/show/${quizId}`,
      ),
    queryKey: ['singleQuiz'],
    enabled: quizId ? true : false,
  });

  const finalData = data?.data.data;
  console.log(finalData);

  const initialValues: IInitialValuesAddQuiz = {
    question: quizId ? finalData?.question : '',
    answers: quizId ? finalData?.answers : [],
  };

  const handleSubmit = async (values: IInitialValuesAddQuiz) => {
    try {
      const transformedValues = {
        answers: values.answers.map((answer) => ({
          ...answer,
          is_true: Number(answer.is_true),
        })),
      };

      const url = quizId
        ? `${base_url_admin}/${Courses}/${LESSONS}/${QUIZES}/update/${quizId}`
        : `${base_url_admin}/${Courses}/${LESSONS}/${QUIZES}/store`;

      const method = quizId ? AxiosWithToken.put : AxiosWithToken.post;
      await method(url, {
        lesson_id: lessonId,
        question: values.question,
        ...transformedValues,
      });
      nav(`/dashboard/courses/${courseId}/show/${lessonId}`);
      showSuccess(
        quizId ? 'تم تعديل الامتحان بنجاح' : 'تم إضافة الامتحان بنجاح',
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      <Formik
        validationSchema={() => AddQuizValidation(!!quizId)}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label
                className="block text-lg text-primary mb-2 font-bold text-gray-700"
                htmlFor="question"
              >
                عنوان السؤال
              </label>
              <Field
                className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                placeholder="عنوان السؤال"
                name="question"
                id="question"
              />
              <ErrorMessage
                name="question"
                component="div"
                className="error text-red-600 text-sm mt-2"
              />
            </div>

            <FieldArray name="answers">
              {({ remove, push }) => (
                <div>
                  {values.answers?.map((answer, index) => (
                    <>
                      <div
                        key={index}
                        className="flex items-center gap-3 flex-wrap mb-2"
                      >
                        <label className="w-3/4">
                          <Field
                            className="appearance-none text-black block w-full px-3 shadow-switch-1 text-gray-700 border border-gray-300 rounded-sm border-none py-4"
                            placeholder="الاجابة"
                            name={`answers.${index}.answer`}
                          />
                        </label>

                        <div className="flex gap-4">
                          <label className="flex gap-2">
                            <Field
                              type="radio"
                              name={`answers.${index}.is_true`}
                              value="1"
                            />
                            صح
                          </label>
                          <label className="flex gap-2">
                            <Field
                              type="radio"
                              name={`answers.${index}.is_true`}
                              value="0"
                            />
                            خطأ
                          </label>
                          <ErrorMessage
                            name={`answers.${index}.is_true`}
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <ErrorMessage
                        name={`answers.${index}.answer`}
                        component="div"
                        className="text-danger mb-4 mt-2"
                      />
                    </>
                  ))}
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-primary py-2 px-4 mt-4 rounded-md text-white"
                    onClick={() => push({ answer: '', is_true: 0 })}
                  >
                    إضافة إجابة
                    <FaPlus />
                  </button>
                </div>
              )}
            </FieldArray>

            <p className="text-danger mt-2">
              {values.answers.length < 2 && 'على الاقل يجب ان يكون اجابتين'}
            </p>
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

export default AddQuiz;
