import * as Yup from 'yup';

//** This validation for
//** add-course,

export const AddLessonValidation = (isEditMode: boolean) =>
  Yup.object({
    title_ar: Yup.string()
      .min(3, 'العنوان باللغة العربية يجب ان يتضمن على الأقل 3 حروف')
      .required('الرجاء ادخال العنوان باللغة العربية'),
    title_en: Yup.string()
      .min(3, 'العنوان باللغة الإنكليزية يجب ان يتضمن على الأقل 3 حروف')
      .required('الرجاء ادخال العنوان باللغة الإنكليزية'),
    media_material: isEditMode
      ? Yup.mixed().notRequired()
      : Yup.mixed()
          .required('الرجاء رفع ملف')
          .test(
            'fileType',
            'يجب أن يكون الملف  بصيغة pdf',
            (value) =>
              value instanceof File && ['application/pdf'].includes(value.type),
          ),
    video: isEditMode
      ? Yup.mixed().notRequired()
      : Yup.mixed()
          .required('الرجاء رفع فيديو')
          .test(
            'fileType',
            'يجب أن يكون الملف فيديو بصيغة mp4 أو mkv',
            (value) =>
              value instanceof File &&
              ['video/mp4', 'video/mkv'].includes(value.type),
          ),
  });
