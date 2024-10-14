import { Field } from 'formik';
import { useState, ChangeEvent } from 'react';

const CardNumberInput = (props: any) => {
  const [cardNumber, setCardNumber] = useState<string>('');

  const formatCardNumber = (value: string): string => {
    // Remove non-digit characters
    let formattedValue = value.replace(/\D/g, '');

    // Add spaces after every 4 digits
    formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1  ');

    return formattedValue;
  };

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCardNumber = formatCardNumber(event.target.value);
    setCardNumber(newCardNumber);
  };

  return (
    <div className="flex items-center" dir="ltr">
      <Field
        type="text"
        maxLength={22}
        placeholder="XXXX - XXXX - XXXX - XXXX"
        pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
        className="text-lg px-8 py-4 bg-gray-100 outline-none border-2 border-transparent shadow-switch-1 w-full max-w-full rounded-xl focus:border-2 focus:border-secondary3"
        value={cardNumber}
        name={props.name}
        onChange={handleCardNumberChange}
        id={props.id}
      ></Field>
    </div>
  );
};

export default CardNumberInput;
