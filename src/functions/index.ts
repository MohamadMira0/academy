import { QueryFunction } from 'react-query';
import { BLOGS, Courses, Jobs, JOBS, Training, TRAINING } from '../Api/Api';
import { Axios, AxiosWithToken } from '../Api/axios';
import {
  IApplyInstitutesType,
  blogsWebsite,
  IInitialValuesAddJobs,
  IJobs,
  ITraining,
} from '../types';
//** formatDate */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// ** Website **
// ** get Jobs **
// export const getJobsWebsite = async (lang: string) => {
//   const response = await Axios.get(`/jobs`);
//   return response?.data;
// };
export const getJobsWebsite = async (lang: string) => {
  const response = await Axios.get(`/jobs`, {
    headers: {
      'X-App-Locale': lang,
    },
  });
  return response?.data;
};

// ** get Training **
export const getTrainingsWebsite = async (lang: string) => {
  const response = await Axios.get(`/${Training}`, {
    headers: {
      'X-App-Locale': lang,
    },
  });
  return response?.data;
};
//** get Courses */
export const getCoursesWebsite = async (lang: string) => {
  const response = await Axios.get(`/${Courses}/index-main`, {
    headers: {
      'X-App-Locale': lang,
    },
  });
  return response?.data;
};
//** get Blogs */
export const getBlogsWebsite = async (lang: string) => {
  const response = await Axios.get(`/${BLOGS}`, {
    headers: {
      'X-App-Locale': lang,
    },
  });
  return response?.data;
};
export const createApplyInstitutesWebsite = async (
  data: IApplyInstitutesType,
) => {
  const response = await Axios.post(`/apply-institute/send`, data);
  return response?.data;
};

// ** Website **

//** dashboard */
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
