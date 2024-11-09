import Footer from '../../components/Footer';

import TopBar2 from '../../components/TopBar2';

import { useMutation, useQuery } from 'react-query';
import { AxiosWithTokenStudent } from '../../Api/axios';
import { Courses } from '../../Api/Api';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import SubmitLoader from '../../components/Loader/SubmitLoader';
import { showError } from '../../libs/ReactToastify';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export default function Exam() {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [goToNextQuestion, setGoToNextQuestion] = useState(false);
  const [answerId, setAnswerId] = useState();
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [finalResult, setFinalResult] = useState();
  const { lang } = useSelector((state: RootState) => state.language);

  const { data, isLoading, isError } = useQuery({
    queryFn: () =>
      AxiosWithTokenStudent.get(`${Courses}/open-quiz/${id}?page=${page}`),

    queryKey: ['exam', page],
  });
  const questions = data?.data?.data;

  const { mutateAsync, isLoading: answerLoading } = useMutation({
    mutationFn: async () => {
      return AxiosWithTokenStudent.post(`${Courses}/solve-question`, {
        lesson_id: id,
        question_id: questions?.data[0].id,
        answer_id: answerId,
      });
    },
    onSuccess: () => {
      setGoToNextQuestion(true);
    },
    onError: () => {
      showError('حدث خطأ ما, يرجى إعادة المحاولة لاحقا');
    },
  });

  const { mutateAsync: result, isLoading: resultLoading } = useMutation({
    mutationFn: async () => {
      return AxiosWithTokenStudent.get(`${Courses}/show-result/${id}`);
    },
    onSuccess: (data) => {
      setShowFinalResult(true);
      setFinalResult(data.data.data);
    },
    onError: () => {
      showError('حدث خطأ ما, يرجى إعادة المحاولة لاحقا');
    },
  });

  console.log(finalResult);

  const questionsShow = questions?.data?.map((item: any, key: number) => (
    <li key={key} className="list-disc ms-8 lg:mb-10 mb-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-2">
        <div>
          <p className="font-bold text-lg text-gray-7">{item.question}</p>
        </div>
        <div className="grid grid-cols-2 lg:gap-20 gap-6">
          {item?.answers?.map((item: any, key: number) => (
            <button
              onClick={() => setAnswerId(item.id)}
              key={key}
              className={`border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300 ${
                answerId === item.id ? 'bg-primary text-white' : ''
              }`}
            >
              {item.answer}
            </button>
          ))}
        </div>
      </div>
    </li>
  ));

  console.log(questions);
  return (
    <>
      <TopBar2 />
      <h1 className="text-gold text-5xl text-center md:py-12 py-6">الامتحان</h1>
      <div className="container lg:px-16 md:px-8 px-3 mx-auto" dir="rtl">
        {!showFinalResult ? (
          <>
            <div className="my-8">
              <p className="font-bold text-xl text-gray-7">
                اختر الإجابة الصحيحة
              </p>
              <div>
                <ul className="mt-8">{questionsShow}</ul>
              </div>

              {isError && !answerId && (
                <p className="text-danger">الرجاء اختيار أحد الخيارين</p>
              )}
            </div>
            <div className="flex my-16 items-center justify-center gap-8">
              {questions?.current_page <= questions?.total &&
                !goToNextQuestion && (
                  <button
                    onClick={mutateAsync}
                    disabled={answerLoading || goToNextQuestion}
                    className="bg-primary flex items-center gap-2 border-gray-1 border rounded-md py-2 px-12 text-white hover:bg-white hover:text-primary duration-300"
                  >
                    ارسال
                    {answerLoading && <SubmitLoader className="w-4 h-4" />}
                  </button>
                )}
              {goToNextQuestion && (
                <button
                  onClick={() => {
                    setPage((prev) => (prev += 1));
                    setGoToNextQuestion(false);
                  }}
                  className="bg-primary flex items-center gap-2 border-gray-1 border rounded-md py-2 px-12 text-white hover:bg-white hover:text-primary duration-300"
                >
                  التالي
                  {isLoading && <SubmitLoader className="w-4 h-4" />}
                </button>
              )}
              {questions?.current_page > questions?.total && (
                <button
                  onClick={result}
                  className="bg-primary flex items-center gap-2 border-gray-1 border rounded-md py-2 px-12 text-white hover:bg-white hover:text-primary duration-300"
                >
                  رؤية النتيجة
                  {resultLoading && <SubmitLoader className="w-4 h-4" />}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="mb-8">
            <h1 className="md:text-2xl mb-2">
              عدد الاسئلة: {finalResult?.number_questions}
            </h1>
            <h1 className="md:text-2xl">
              عدد الاجابات الصحيحة: {finalResult?.number_questions}
            </h1>

            <Link
              className="bg-primary flex items-center gap-2 border-gray-1 border rounded-md py-2 px-12 text-white hover:bg-white hover:text-primary duration-300 w-fit px-4 mt-4"
              to={'/course/' + id}
            >
              رجوع الى صفحة الكورس
            </Link>
          </div>
        )}
      </div>
      <Footer footer />
    </>
  );
}
