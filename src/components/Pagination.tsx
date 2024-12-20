import ReactPaginate from 'react-paginate';
import React from 'react';

type paginateProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  perPage: number;
};
const PaginatedItems: React.FC<paginateProps> = ({
  totalPages,
  setPage,
  perPage,
}) => {
  const pageCount = totalPages / perPage;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(e) => setPage(e.selected + 1)}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-end m-10 text-sm"
        pageLinkClassName="mx-2 p-2   border-2 border-stroke rounded-full inline-block w-[30px] h-[30px] text-center leading-3 hover:bg-meta-7 hover:text-white duration-700"
        activeLinkClassName=" border-strokedark  bg-boxdark text-white dark:border-stroke dark:bg-stroke dark:text-black "
      />
    </>
  );
};
export default PaginatedItems;
