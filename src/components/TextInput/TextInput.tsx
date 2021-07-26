import clsx from 'clsx';
import React from 'react';

import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

import { TextInputProps } from './TextInput.interface';

function TextInput(props: TextInputProps) {
  const {
    type = 'text',
    variant = 'text',
    id,
    label,
    className,
    wrapperClassName,
    ...rest
  } = props;

  return (
    <div className={clsx('flex flex-col', wrapperClassName)}>
      {label && (
        <label className="mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={clsx(
          'relative flex flex-1 p-4 bg-white text-sm rounded-lg ring-1 ring-inset ring-gray-300',
          {
            'pr-12': variant === 'search',
          },
        )}
      >
        <input
          type={type}
          id={id}
          className={clsx(
            'bg-transparent flex flex-1 font-semibold focus:outline-none',
            className,
          )}
          {...rest}
        />
        {variant === 'search' && (
          <SearchIcon
            aria-label="Search icon"
            className="absolute transform -translate-y-1/2 right-4 top-1/2"
          />
        )}
      </div>
    </div>
  );
}

export default TextInput;
