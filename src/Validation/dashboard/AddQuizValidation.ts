import * as Yup from 'yup';

//** This validation for
//** add-blog,
//** add-training,
//** update-training
//** and add-job

export const AddQuizValidation = (isEditMode: boolean) =>
  Yup.object().shape({
    question: Yup.string()
      .min(3, 'السؤال يجب ان يتضمن على الأقل 3 حروف')
      .required('الرجاء ادخال السؤال'),
    answers: Yup.array()
      .of(
        Yup.object().shape({
          answer: Yup.string()
            .required('الإجابة مطلوبة')
            .min(3, 'Answer must be at least 3 characters long'),
          is_true: Yup.number()
            .required('is_true is required')
            .oneOf([0, 1], 'is_true must be 0 or 1'),
        }),
      )
      .min(2, 'يجب على الاقل ان يكون هناك اجابتين'),
  });
