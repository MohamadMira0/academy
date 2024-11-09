export interface BaseFields {
  description_ar: string;
  description_en: string;
  title_ar: string;
  title_en: string;
}
export interface IMedia {
  file_path: string;
  filename: string;
  title: string;
}
export interface IJobs extends BaseFields {
  id: number;
  media: IMedia;
  created_at: string;
}
export interface jobsWebsite {
  id?: number;
  title: string;
  description: string;
  media: IMedia;
}
export interface trainingsWebsite extends jobsWebsite {}
export interface blogsWebsite extends jobsWebsite {
  updated_at: string;
}
export interface IInitialValuesAddJobs extends BaseFields {
  media?: File | null;
}
export interface IInitialValuesAddTrainings extends BaseFields {
  media?: File | null;
}
export interface IInitialValuesAddBlogs extends BaseFields {
  media?: File | null;
}

export interface IInitialValuesAddCourse extends BaseFields {
  study_group:
    | 'first group'
    | 'second group'
    | 'navigation and marine officers';
  type_payment: 'free' | 'payed';
  price_in_egypt: number | string;
  price_out_egypt: number | string;
  number_months: number | string;
  media: File | Blob | MediaSource | string;
  publish?: boolean;
}

export interface IInitialValuesAddOffer extends BaseFields {
  price_in_egypt: number | string;
  instead_of_in_egypt: number | string;
  price_out_egypt: number | string;
  instead_of_out_egypt: number | string;
  media: string | Blob;
  publish?: boolean;
  course_ids: number | string;
}

export interface IInitialValuesAddUser {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}

export interface IInitialValuesAddLesson {
  title_ar: string;
  title_en: string;
  media_material: File;
  video: File;
}

export type answer = {
  answer: string;
  is_true: boolean;
};

export interface IInitialValuesAddQuiz {
  question: string;
  answers: answer[];
}

export interface ITraining extends IJobs {}
export interface IBlogs {
  id: number;
  title: string;
  description: string;
  media: IMedia;
  updated_at: string;
}

export interface IApplyInstitutesType {
  name: string;
  phone: number | string;
  email: string;
  educational_qualification: string;
}
export interface IContactUsType {
  name: string;
  phone: number | string;
  email: string;
  message: string;
}

export interface ICourseWebsite {
  id: number;
  type?: string;
  media_path: string;
  price?: number;
  title: string;
  description?: string;
  type_payment?: string;
  instead_of?: number;
}
