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
  handleDelete?: UseMutateAsyncFunction<any, unknown, string, unknown>;
}

const Table = <T,>({
  data,
  columns,
  children,
  action,
  totalPages,
  setPage,
  handleDelete,
}: TableProps<T>) => {
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <>
      <div className="bg-white shadow-lg rounded-md overflow-x-auto p-4">
        {children}
        <table className=" min-w-full  my-4">
          <thead>
            <tr>
              {columns.map((column) => (
                <th className="py-4 " key={column.key as string}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((row, index) => (
              <tr key={index} className="">
                {columns.map((column) => (
                  <td className="py-2 " key={column.key as string}>
                    {String(row[column.key])}
                  </td>
                ))}
                {action !== false && (
                  <td>
                    <span className="flex items-center justify-center gap-2">
                      <AiFillDelete
                        className="text-xl text-danger cursor-pointer"
                        onClick={() => setOpenPopUp(true)}
                      />
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
                      <Link to={`edit/${row?.id}`}>
                        <FaRegEye className="text-xl text-primary-2" />
                      </Link>
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <PaginatedItems setPage={setPage} totalPages={totalPages || 0} />
      </div>
    </>
  );
};

export default Table;
