import { UseMutateAsyncFunction } from 'react-query';
import SubmitLoader from '../Loader/SubmitLoader';

type DeletePopup = {
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete?: UseMutateAsyncFunction<any, unknown, string, unknown>;
  id: string;
  DeleteLoading?: boolean;
};

const DeletePopUp = ({
  setOpenPopUp,
  handleDelete,
  id,
  DeleteLoading,
}: DeletePopup) => {
  return (
    <>
      <div className="bg-black fixed top-0 left-0 w-full h-full z-10 opacity-20"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        {/* Main modal */}
        <div
          id="deleteModal"
          tabIndex={-1}
          aria-hidden="true"
          className="  justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            {/* Modal content */}
            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                onClick={() => setOpenPopUp(false)}
                type="button"
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 "
                data-modal-toggle="deleteModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <svg
                className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mb-4 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete this item?
              </p>
              <div className="flex justify-center items-center space-x-4 gap-5">
                <button
                  onClick={() => setOpenPopUp(false)}
                  data-modal-toggle="deleteModal"
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  type="submit"
                  disabled={DeleteLoading}
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900 flex items-center gap-2"
                  onClick={() => handleDelete(id)}
                >
                  {DeleteLoading && <SubmitLoader />} Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePopUp;
