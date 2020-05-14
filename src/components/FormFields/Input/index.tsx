import React from 'react';

import './styles.css';

interface Props {
  name: string;
  label: string;
  value?: string;
  type?: string;
}

export const TextField = React.forwardRef(
  ({ name, label, value, type = 'text' }: Props, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className="input-container">
        <input
          id={name}
          name={name}
          className="input"
          type={type}
          pattern=".+"
          required
          ref={ref}
          defaultValue={value}
        />
        <label className="label" htmlFor={name}>
          {label}
        </label>
      </div>
    );
  },
);
