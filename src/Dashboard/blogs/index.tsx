import { TbMessageCircle } from 'react-icons/tb';
import { MdAccessTime } from 'react-icons/md';
import IconBxShow from '../../assets/svg/IconBxShow';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { formatDate, getBlogs } from '../../functions';
import { IBlogs } from '../../types';
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import DeletePopUp from '../../components/Dashboard/DeletePopUp';
import { AxiosWithToken } from '../../Api/axios';
import { base_url_admin, BLOGS } from '../../Api/Api';

const BlogsDashboard = () => {
  const queryClient = useQueryClient();

  // ** Handle Jobs
  const { data, isLoading } = useQuery(['blogs'], getBlogs);
  const [openPopUp, setOpenPopUp] = useState(false);

  const blogs: IBlogs[] = data?.data;
  const { mutateAsync, isLoading: DeleteLoading } = useMutation({
    mutationFn: async (id: string) => {
      return AxiosWithToken.delete(`${base_url_admin}/${BLOGS}/delete/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['blogs']);
      setOpenPopUp(false);
    },
  });

  const blogsShow = blogs?.map((blog) => (
    <div className="bg-secondary2 rounded-md shadow-lg p-4 max-w-90">
      <div className="flex justify-between text-primary">
        <div>
          <AiFillDelete
            className="text-xl text-danger cursor-pointer"
            onClick={() => setOpenPopUp(blog.id)}
          />
        </div>
        <div className="flex gap-2">
          <p className="cursor-pointer">تعديل البيانات</p>
          <FaRegEdit />
        </div>
      </div>
      <div className=" rounded-md overflow-hidden py-4">
        <img
          src={blog.media.file_path}
          className="w-full rounded-md h-[275px]"
        />
        <div className="text-center p-4">
          <h3 className="text-primary text-2xl font-bold">{blog.title_ar}</h3>
        </div>
        <div className="flex justify-around flex-wrap gap-1">
          <div className="flex items-center justify-center gap-1 py-1 px-3 text-white bg-sky-700 rounded-full">
            <p className="text-xs">123 مشاهدة</p>
            <IconBxShow className="text-xs" />
          </div>
          <div className="flex items-center gap-1 justify-center py-1 px-3 text-white bg-sky-700 rounded-full">
            <p className="text-xs">456 تعليق</p>
            <TbMessageCircle className="text-xs" />
          </div>
          <div className="flex items-center justify-center self-center text-white gap-1 py-1 px-3 bg-sky-700 rounded-full">
            <p className="text-xs flex">{formatDate(blog.created_at)}</p>
            <MdAccessTime className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  ));

  if (isLoading) return <div>loading...</div>;
  return (
    <div className="bg-white shadow-lg rounded-md overflow-x-auto lg:p-16 md:p-8 p-4">
      {openPopUp && (
        <DeletePopUp
          setOpenPopUp={setOpenPopUp}
          handleDelete={mutateAsync}
          id={openPopUp}
          DeleteLoading={DeleteLoading}
        />
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center-">
        {blogsShow}
      </div>
      <div className="flex justify-center items-center my-4 mt-8">
        <Link
          to={'/dashboard/add-blog'}
          className="bg-sky-600 text-center text-white rounded-lg px-10 py-2 hover:bg-sky-800 duration-300 hover:text-white flex items-center gap-2"
        >
          <span className="font-bold" style={{ fontSize: '24px' }}>
            +
          </span>
          <p> إضافة مدونة</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogsDashboard;
