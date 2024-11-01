import * as Yup from 'yup';

//** This validation for
//** add-blog,
//** add-training,
//** update-training
//** and add-job

export const AddBasicValidation = Yup.object({
  title_ar: Yup.string()
    .min(3, 'العنوان باللغة العربية يجب ان يتضمن على الأقل 3 حروف')
    .required('الرجاء ادخال العنوان باللغة العربية'),
  title_en: Yup.string()
    .min(3, 'العنوان باللغة الإنكليزية يجب ان يتضمن على الأقل 3 حروف')
    .required('الرجاء ادخال العنوان باللغة الإنكليزية'),
  description_ar: Yup.string()
    .min(3, 'الوصف باللغة الإنكليزية يجب ان يتضمن على الأقل 3 حروف')
    .required('الرجاء ادخال الوصف باللغة الإنكليزية'),
  description_en: Yup.string()
    .min(3, 'الوصف باللغة الإنكليزية يجب ان يتضمن على الأقل 3 حروف')
    .required('الرجاء ادخال الوصف باللغة الإنكليزية'),
  media: Yup.mixed()
    .required('الرجاء ادخال صورة')
    .test(
      'fileType',
      'يجب أن يكون الملف صورة بصيغة jpg أو png أو jpeg',
      (value) => {
        return (
          value instanceof File &&
          ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
        );
      },
    ),
});
