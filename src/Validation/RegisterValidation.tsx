import * as Yup from 'yup';
export const RegisterValidation = Yup.object({
  first_name: Yup.string()
    .min(3, 'يجب ان يتضمن الاسم الأول على 3 حروف على الأقل')
    .required('الرجاء ادخال الاسم الأول'),
  last_name: Yup.string()
    .min(3, 'يجب ان يتضمن الاسم الثاني على 3 حروف على الأقل')
    .required('الرجاء ادخال الاسم الثاني'),
  phone: Yup.string()
    .matches(/^\d+$/, 'الرجاء ادخال رقم هاتف صحيح')
    .max(11, 'الرجاء ادخال رقم صحيح')
    .min(11, 'الرجاء ادخال رقم صحيح')
    .required('الرجاء ادخال رقم الهاتف'),
  email: Yup.string()
    .email('الرجاء ادخال بريد الكتروني صحيح')
    .required('الرجاء ادخال بريد الكتروني'),
  password: Yup.string()
    .min(6, 'كلمة السر يجب ان تتضمن على الأقل على 6 حروف و ارقام')
    .required('الرجاء ادخال كلمة السر'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'كلمة السر يجب ان تكون متتطابقة')
    .required('الرجاء ادخال كلمة السر'),
});
