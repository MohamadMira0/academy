import * as Yup from 'yup';
export const FooterValidation = Yup.object({
  full_name: Yup.string()
    .min(3, 'الاسم يجب ان يتضمن على الأقل 3 حروف')
    .required('الرجاء ادخال الإسم'),
  email: Yup.string()
    .email('الرجاء ادخال بريد الكتروني صحيح')
    .required('الرجاء ادخال البريد الإلكتروني'),
  phone: Yup.string()
    .matches(/^\d+$/, 'الرجاء ادخال رقم هاتف صحيح')
    .max(11, 'الرجاء ادخال رقم صحيح')
    .min(11, 'الرجاء ادخال رقم صحيح')
    .required('الرجاء ادخال رقم الهاتف'),
  message: Yup.string()
    .min(3, 'الرسالة يجب ان تتضمن على الأقل 3 حروف')
    .required('الرجاء ادخال رسالة'),
});
