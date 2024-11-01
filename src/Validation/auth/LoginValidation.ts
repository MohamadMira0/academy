import * as Yup from 'yup';
export const LoginValidation = Yup.object({
  email: Yup.string()
    .email('الرجاء ادخال بريد الكتروني صحيح')
    .required('الرجاء ادخال بريد الكتروني'),
  password: Yup.string()
    .min(6, 'كلمة السر يجب ان تتضمن على الأقل على 6 حروف و ارقام')
    .required('الرجاء ادخال كلمة السر'),
});
