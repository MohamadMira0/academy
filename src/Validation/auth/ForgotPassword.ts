import * as Yup from 'yup';
export const ForgotValidation = Yup.object({
  email: Yup.string()
    .email('الرجاء ادخال بريد الكتروني صحيح')
    .required('الرجاء ادخال بريد الكتروني'),
});
export const ForgotTokenValidation = Yup.object({
  token: Yup.string()
    .min(4, 'الرجاء ادخال الرمز الصحيح')
    .required('الرجاء ادخال الرمز المرسل على بريدك الألكتروني'),
});
export const ResetPasswordValidation = Yup.object({
  token: Yup.string()
    .min(4, 'الرجاء ادخال الرمز الصحيح')
    .required('الرجاء ادخال الرمز المرسل على بريدك الألكتروني'),
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
