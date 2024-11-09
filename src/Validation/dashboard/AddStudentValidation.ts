import * as Yup from 'yup';

//** This validation for
//** add-student,

export const AddStudentValidation = (prof?: boolean) =>
  Yup.object({
    first_name: Yup.string()
      .min(3, 'الاسم  يجب ان يتضمن على الأقل 3 حروف')
      .required('الرجاء ادخال الاسم '),
    last_name: Yup.string()
      .min(3, 'الاسم الاخير  يجب ان يتضمن على الأقل 3 حروف')
      .required('الرجاء ادخال الاسم الاخير '),
    phone: Yup.string()
      .min(11, 'الرقم  يجب ان يتضمن على الأقل 11 رقم')
      .max(11, 'الرقم  يجب ان يتضمن على الأكثر 11 رقم')
      .required('الرجاء ادخال الرقم '),
    email: Yup.string()
      .email('يجب ان يكون ايميل')
      .required('الرجاء ادخال البريد الالكتروني '),
    password: prof
      ? Yup.string()
          .min(6, 'على الأقل يجب ان تتضمن كلمة السر على 6 أحرف')
          .required('الرجاء ادخال كلمة المرور ')
      : Yup.string().notRequired(),
  });
