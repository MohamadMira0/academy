import { Field } from 'formik';
import React, { useState, ChangeEvent } from 'react';

const ExpirationDateInput = (props: any) => {
  const [expirationDate, setExpirationDate] = useState<string>('');

  const formatExpirationDate = (value: string): string => {
    // Remove non-digit characters
    let formattedValue = value.replace(/\D/g, '');

    // Limit to 2 digits for month, 2 digits for day, and 4 digits for year
    if (formattedValue.length > 4) {
      let month = parseInt(formattedValue.slice(0, 2));
      let day = parseInt(formattedValue.slice(2, 4));
      let year = parseInt(formattedValue.slice(4, 8));

      // Validate month and day
      if (month < 1) {
        month = 1;
      } else if (month > 12) {
        month = 12;
      }
      if (day < 1) {
        day = 1;
      } else if (day > 30) {
        day = 30;
      }

      formattedValue = `${String(month).padStart(2, '0')}/${String(
        day,
      ).padStart(2, '0')}/${String(year)}`;
    } else if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2,
      )}`;
    }

    return formattedValue;
  };

  const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newExpirationDate = formatExpirationDate(event.target.value);
    setExpirationDate(newExpirationDate);
  };

  return (
    <div className="flex items-center">
      <Field
        type="text"
        maxLength={10}
        placeholder="MM/DD/YYYY"
        pattern="\d{2}/\d{2}/\d{4}"
        className="text-lg px-8 py-4 bg-gray-100 outline-none border-2 border-transparent shadow-switch-1 rounded-xl focus:border-2 focus:border-secondary3 w-full "
        value={expirationDate}
        onChange={handleExpirationDateChange}
        id={props.id}
      />
    </div>
  );
};

export default ExpirationDateInput;
