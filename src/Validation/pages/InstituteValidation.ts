import * as Yup from 'yup';
export const InstituteValidation = Yup.object({
  training_id: Yup.string().required('الرجاء ادخال اسم التدريب'),
  name: Yup.string()
    .min(3, 'يجب ان يتضمن الاسم الأول على 3 حروف على الأقل')
    .required('الرجاء ادخال الاسم الأول'),
  email: Yup.string()
    .email('الرجاء ادخال بريد الكتروني صحيح')
    .required('الرجاء ادخال بريد الكتروني'),
  educational_qualification: Yup.string().required(
    'الرجاء ادخال المؤهل التعليمي',
  ),
  phone: Yup.string()
    .matches(/^\d+$/, 'الرجاء ادخال رقم هاتف صحيح')
    .max(11, 'الرجاء ادخال رقم صحيح')
    .min(11, 'الرجاء ادخال رقم صحيح')
    .required('الرجاء ادخال رقم الهاتف'),
});
