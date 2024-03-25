import React from 'react';

type Props = {
  label?: string;
  name?: string;
  value?: string | number;
  className?: string;
  type: 'text';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function InputField(props: Props): JSX.Element {
  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium text-textColor">{props.label}</label>
      <input
        {...props}
        id={props.name}
        type={props.type ?? 'text'}
        className={`inline-block shadow-sm w-full sm:text-sm  px-2 rounded ${props.className}`}
      />
    </div>
  );
}
