import clsx from 'clsx';

import { ButtonProps, ButtonVariantType } from './Button.interface';

const classNameVariants: Record<ButtonVariantType, string> = {
  primary:
    'bg-blue-primary hover:bg-blue-secondary text-white disabled:bg-gray-500',
  secondary:
    'bg-white text-blue-primary hover:text-blue-secondary ring-inset ring-1 ring-blue-primary hover:ring-blue-secondary disabled:ring-gray-500 disabled:text-gray-500',
};

function Button({
  variant = 'primary',
  type = 'button',
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex items-center font-semibold justify-center py-[11px] px-6 text-sm rounded transition duration-150 disabled:cursor-not-allowed',
        classNameVariants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
