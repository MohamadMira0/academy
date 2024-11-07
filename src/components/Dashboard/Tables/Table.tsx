import React, { ReactNode, useState } from 'react';
import PaginatedItems from '../../Pagination';
import { AiFillDelete } from 'react-icons/ai';
import { RiEditBoxLine } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import DeletePopUp from '../DeletePopUp';
import { UseMutateAsyncFunction } from 'react-query';

interface TableProps<T> {
  children?: ReactNode;
  data: T[];
  columns: Array<{
    key: keyof T;
    label: string;
  }>;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  action?: boolean;
  deleteAction?: boolean;
  handleDelete?: UseMutateAsyncFunction<any, unknown, string, unknown>;
  perPage: number;
  showPath?: string;
}

const Table = <T,>({
  data,
  columns,
  children,
  action,
  deleteAction,
  totalPages,
  setPage,
  handleDelete,
  perPage,
  showPath,
}: TableProps<T>) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <>
      <div className="bg-white shadow-lg relative  rounded-md overflow-x-auto p-4">
        {children}
        <table className="w-full my-4">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  scope="col"
                  className="py-4 px-6"
                  key={column.key as string}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((row, index) => (
              <tr key={index} className="">
                {columns.map((column) => (
                  <td
                    scope="col"
                    className="py-4 px-6"
                    key={column.key as string}
                  >
                    {String(row[column.key])}
                  </td>
                ))}
                {action !== false && (
                  <td className="px-6">
                    <span className="flex items-center justify-center gap-2">
                      {deleteAction !== false && (
                        <AiFillDelete
                          className="text-xl text-danger cursor-pointer"
                          onClick={() => setOpenPopUp(true)}
                        />
                      )}
                      {openPopUp && (
                        <DeletePopUp
                          handleDelete={handleDelete}
                          setOpenPopUp={setOpenPopUp}
                          id={row?.id}
                        />
                      )}
                      <Link to={`edit/${row?.id}`}>
                        <RiEditBoxLine className="text-xl text-primary" />
                      </Link>
                      <Link to={`${showPath ?? ''}${row?.id}`}>
                        <FaRegEye className="text-xl text-primary-2" />
                      </Link>
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <PaginatedItems
          setPage={setPage}
          totalPages={totalPages || 0}
          perPage={perPage}
        />
      </div>
    </>
  );
};

export default Table;
