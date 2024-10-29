import { Link } from 'react-router-dom';

type PopUpType = {
  openDetails: boolean;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
};
export default function AlertPopUp({
  openDetails,
  setOpenDetails,
  name,
}: PopUpType) {
  return (
    <>
      {/* <!-- Modal toggle --> */}
      <div
        className={`${
          openDetails ? '' : 'hidden'
        } bg-blend-multiply bg-black opacity-60 w-screen h-screen fixed left-0 top-0 z-40`}
      ></div>
      {/* <!-- Main modal --> */}
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          openDetails ? '' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 justify-center items-center w-full md:inset-0 inset-0 flex h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full inset-0 mx-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5  rounded-t">
              <h3 className="text-2xl font-bold text-primary flex-1 text-center">
                {name}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
                onClick={() => setOpenDetails((prev) => !prev)}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-right font-bold text-gray-7">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ
              </p>
            </div>
            <div className="flex justify-center pb-8">
              <Link
                to={'/payment'}
                className="bg-secondary3 text-white py-1 px-5 rounded-md text-sm hover:text-secondary3 hover:bg-white duration-300"
              >
                حجز الكورس
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
