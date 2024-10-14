import { ReactNode } from 'react';

interface TableProps<T> {
  children?: ReactNode;
  data: T[];
  columns: Array<{
    key: keyof T;
    label: string;
  }>;
}

const Table = <T,>({ data, columns, children }: TableProps<T>) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto p-4">
      {children}
      <table className=" min-w-full  my-4">
        <thead>
          <tr>
            {columns.map((column) => (
              <th className="py-2 " key={column.key as string}>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
