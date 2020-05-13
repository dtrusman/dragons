import React from 'react';

import './styles.css';

interface Props {
  name: string;
  label: string;
  value?: string[];
}

export const Textarea = React.forwardRef(
  ({ name, label, value }: Props, ref: React.Ref<HTMLTextAreaElement>) => {
    return (
      <div className="textarea-container">
        <textarea id={name} name={name} className="textarea" ref={ref} defaultValue={value} />
        <label className="label" htmlFor={name}>
          {label}
        </label>
      </div>
    );
  },
);
