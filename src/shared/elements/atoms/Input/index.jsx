import { forwardRef, useState } from 'react';

import { Label } from '@elements/atoms';

export const Input = forwardRef(
  (
    {
      defaultValue,
      label,
      showRequiredLabel,
      showLength = false,
      className,
      classNameLabel,
      classNameContainer,
      classNameLabelContainer,
      icon,
      disabled,
      step,
      styleIcon,
      maxLength,
      borderRadius = '0.5rem',
      onClick,
      checked,
      name,
      valueInput,
      htmlFor,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(defaultValue);
    return (
      <div className={`relative ${classNameContainer}`}>
        {label && (
          <Label
            htmlFor={htmlFor}
            label={label}
            required={showRequiredLabel}
            className={classNameLabelContainer}
            classNameText={classNameLabel}
          />
        )}
        <input
          ref={ref}
          style={{ borderRadius }}
          className={`border  border-primary-grey-100 text-paragraph-02 outline-none w-full placeholder:text-paragraph-03 input-lg placeholder:text-placeholder focus:shadow-01 ${borderRadius} ${
            disabled ? 'text-disabled bg-primary-grey-800' : ''
          } ${icon ? 'pr-10' : ''} ${className}`}
          disabled={disabled}
          step={step}
          autoComplete="off"
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
          {...props}
          onClick={onClick}
          checked={checked}
          value={valueInput}
          name={name}
        />
        {icon && (
          <div
            className="absolute right-5 top-[30px] z-10 cursor-pointer"
            style={styleIcon}
          >
            {icon}
          </div>
        )}
        {showLength && (
          <div className="absolute right-0 -top-5">
            <span className="text-paragraph-04 text-primary-grey-600">
              {value?.length || 0}/{maxLength}
            </span>
          </div>
        )}
      </div>
    );
  }
);
