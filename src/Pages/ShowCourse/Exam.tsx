import { useState } from 'react';
import Footer from '../../components/Footer';
import ExamButton from '../../components/Inputs/ExamButton';
import TopBar2 from '../../components/TopBar2';
import Button from '../../components/Button';

export default function Exam() {
  const [active, setActive] = useState(false);
  return (
    <>
      <TopBar2 />
      <h1 className="text-gold text-5xl text-center md:py-12 py-6">
        اسم الامتحان
      </h1>
      <div className="container lg:px-16 md:px-8 px-3 mx-auto" dir="rtl">
        <div className="mb-8">
          <p className="font-bold text-xl text-gray-7">
            1. عنوان السؤال (اختر الإجابة الصحيحة)
          </p>
          <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 lg:gap-20 gap-6 my-4 lg:px-32 px-16">
            <ExamButton
              title="أ"
              className={`${
                active ? 'bg-primary text-white' : 'bg-transparent'
              } border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300`}
              onClick={() => setActive((prev) => !prev)}
            />
            <ExamButton
              title="ب"
              className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
            />
            <ExamButton
              title="ج"
              className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
            />
            <ExamButton
              title="د"
              className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-xl text-gray-7">
            2. عنوان السؤال (اختر الإجابة الصحيحة)
          </p>
          <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 lg:gap-20 gap-6 my-4 lg:px-32 px-16">
            <ExamButton
              title="أ"
              className="border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
            />
            <ExamButton
              title="ب"
              className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
            />
            <ExamButton
              title="ج"
              className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
            />
            <ExamButton
              title="د"
              className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
            />
          </div>
        </div>
        <div className="my-8">
          <p className="font-bold text-xl text-gray-7">
            3. عنوان السؤال (اختر الإجابة الصحيحة)
          </p>
          <div>
            <ul className="mt-8">
              <li className="list-disc ms-8 lg:mb-10 mb-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-2">
                  <div>
                    <p className="font-bold text-lg text-gray-7">
                      عنوان السؤال
                    </p>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-20 gap-6">
                    <ExamButton
                      title="صح"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                    <ExamButton
                      title="خطأ"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                  </div>
                </div>
              </li>
              <li className="list-disc ms-8 lg:mb-10 mb-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-2">
                  <div>
                    <p className="font-bold text-lg text-gray-7">
                      عنوان السؤال
                    </p>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-20 gap-6">
                    <ExamButton
                      title="صح"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                    <ExamButton
                      title="خطأ"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                  </div>
                </div>
              </li>
              <li className="list-disc ms-8 lg:mb-10 mb-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-2">
                  <div>
                    <p className="font-bold text-lg text-gray-7">
                      عنوان السؤال
                    </p>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-20 gap-6">
                    <ExamButton
                      title="صح"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                    <ExamButton
                      title="خطأ"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                  </div>
                </div>
              </li>
              <li className="list-disc ms-8 lg:mb-10 mb-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-2">
                  <div>
                    <p className="font-bold text-lg text-gray-7">
                      عنوان السؤال
                    </p>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-20 gap-6">
                    <ExamButton
                      title="صح"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                    <ExamButton
                      title="خطأ"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                  </div>
                </div>
              </li>
              <li className="list-disc ms-8 lg:mb-10 mb-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-2">
                  <div>
                    <p className="font-bold text-lg text-gray-7">
                      عنوان السؤال
                    </p>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-20 gap-6">
                    <ExamButton
                      title="صح"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                    <ExamButton
                      title="خطأ"
                      className=" border-gray-1 border rounded-md py-2 hover:bg-primary hover:text-white duration-300"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex my-16 items-center justify-center gap-8">
          <Button
            to="/course/1"
            title="العودة"
            className=" border-gray-1 border rounded-md py-2 px-12 hover:bg-primary hover:text-white duration-300"
          />
          <ExamButton
            title="إرسال"
            className="bg-primary border-gray-1 border rounded-md py-2 px-12 text-white hover:bg-white hover:text-primary duration-300"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
