import * as Yup from 'yup';
export const PaymentValidation = Yup.object({
  numberCard: Yup.string()
    .max(22, 'رقم الكارت يجب ان يتألف من 16 رقم')
    .min(22, 'رقم الكارت يجب ان يتألف من 16 رقم')
    .required('الرجاء ادخال رقم كارت '),
  finishDate: Yup.string()
    .min(10, 'الرجاء ادخال التاريخ كامل')
    .required('الرجاء ادخال تاريخ الإنتهاء'),
  password: Yup.string()
    .max(5, ' الرجاء ادخال كلمة سر صحيحة')
    .min(5, ' الرجاء ادخال كلمة سر صحيحة')
    .required('الرجاء ادخال كلمة السر'),
});
