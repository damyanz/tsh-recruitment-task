import clsx from 'clsx';
import React from 'react';

import { SpinnerProps } from './Spinner.interface';

function Spinner({ size = 60, className, ...rest }: SpinnerProps) {
  return (
    <svg
      className={clsx('animate-spin', className)}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="30" cy="30" r="28" stroke="#E0E2EA" strokeWidth="4" />
      <path
        d="M58 30C58 14.536 45.464 2 30 2"
        stroke="#4460F7"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Spinner;
