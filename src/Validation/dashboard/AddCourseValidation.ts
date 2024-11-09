import * as Yup from 'yup';

//** This validation for
//** add-course,

export const AddCourseValidation = (isEditMode: boolean) =>
  Yup.object({
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
    study_group: Yup.string().required('الرجاء اختيار فئة'),
    type_payment: Yup.string().required('الرجاء اختيار النوع'),
    price_in_egypt: Yup.number().required('الرجاء ادخال السعر'),
    price_out_egypt: Yup.number().required('الرجاء ادخال السعر'),
    number_months: Yup.number().required('الرجاء ادخال عدد الأشهر'),
    media: isEditMode
      ? Yup.mixed().notRequired()
      : Yup.mixed()
          .required('الرجاء ادخال صورة')
          .test(
            'fileType',
            'يجب أن يكون الملف صورة بصيغة jpg أو png أو jpeg',
            (value) =>
              value instanceof File &&
              ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type),
          ),
    publish: Yup.bool().notRequired(),
  });

export const AddOfferValidation = (isEditMode: boolean) =>
  Yup.object({
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
    price_in_egypt: Yup.number().required('الرجاء ادخال السعر').min(1),
    instead_of_in_egypt: Yup.number().required('الرجاء ادخال السعر').min(1),
    price_out_egypt: Yup.number().required('الرجاء ادخال السعر').min(1),
    instead_of_out_egypt: Yup.number().required('الرجاء ادخال السعر').min(1),
    media: isEditMode
      ? Yup.mixed().notRequired()
      : Yup.mixed()
          .required('الرجاء ادخال صورة')
          .test(
            'fileType',
            'يجب أن يكون الملف صورة بصيغة jpg أو png أو jpeg',
            (value) =>
              value instanceof File &&
              ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type),
          ),
    course_ids: Yup.mixed()
      .required('الرجاء اختيار كورس')
      .notOneOf(['Please Choose Course'], 'الرجاء اختيار كورس'),
    publish: Yup.bool().notRequired(),
  });
