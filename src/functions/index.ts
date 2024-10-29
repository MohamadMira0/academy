import { BLOGS, JOBS, TRAINING } from '../Api/Api';
import { AxiosWithToken } from '../Api/axios';
import { IInitialValuesAddJobs, IJobs, ITraining } from '../types';
// ** Jobs **
export const getJobs = async () => {
  const response = await AxiosWithToken.get(`/${JOBS}`);
  return response?.data;
};

export const getJob = async (id: number) => {
  const response = await AxiosWithToken.get(`/${JOBS}/${id}`);
  return response?.data;
};

export const createJob = async (job: FormData) => {
  const response = await AxiosWithToken.post(`/${JOBS}/store`, job, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response?.data;
};

export const updateJob = async (job: IJobs) => {
  const response = await AxiosWithToken.put(`/${JOBS}/update/${job.id}`, job);
  return response?.data;
};

export const deleteJob = async (id: number) => {
  const response = await AxiosWithToken.delete(`/${JOBS}/delete/${id}`);
  return response?.data;
};

// ** Training **
export const getTrainings = async () => {
  const response = await AxiosWithToken.get(`/${TRAINING}`);
  return response?.data;
};

export const getTraining = async (id: number) => {
  const response = await AxiosWithToken.get(`/${TRAINING}/show/${id}`);
  return response?.data;
};

export const createTraining = async (training: FormData) => {
  const response = await AxiosWithToken.post(`/${TRAINING}/store`, training);
  return response?.data;
};

export const updateTraining = async (formData: FormData, id: string) => {
  const response = await AxiosWithToken.post(
    `/${TRAINING}/update/${id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response?.data;
};

export const deleteTraining = async (id: number) => {
  const response = await AxiosWithToken.delete(`${TRAINING}/delete/${id}`);
  return response?.data;
};

// ** Blogs **
export const getBlogs = async () => {
  const response = await AxiosWithToken.get(`/${BLOGS}`);
  return response?.data;
};

export const getBlog = async (id: number) => {
  const response = await AxiosWithToken.get(`/${BLOGS}/show/${id}`);
  return response?.data;
};

export const createBlog = async (blog: FormData) => {
  const response = await AxiosWithToken.post(`/${BLOGS}/store`, blog);
  return response?.data;
};

export const updateBlog = async (formData: FormData, id: string) => {
  const response = await AxiosWithToken.post(
    `/${BLOGS}/update/${id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response?.data;
};

export const deleteBlog = async (id: number) => {
  const response = await AxiosWithToken.delete(`${BLOGS}/delete/${id}`);
  return response?.data;
};
