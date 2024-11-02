export interface BaseFields {
  description_ar: string;
  description_en: string;
  title_ar: string;
  title_en: string;
}
interface IMedia {
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
  title: string;
  description: string;
  media: IMedia;
}
export interface trainingsWebsite extends jobsWebsite {}
export interface IInitialValuesAddJobs extends BaseFields {
  media?: File | null;
}
export interface IInitialValuesAddTrainings extends BaseFields {
  media?: File | null;
}
export interface IInitialValuesAddBlogs extends BaseFields {
  media?: File | null;
}

export interface ITraining extends IJobs {}
export interface IBlogs extends IJobs {}
