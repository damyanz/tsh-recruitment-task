import clsx from 'clsx';

import { BadgeProps } from './Badge.interface';

function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'absolute left-0 inline-block px-4 py-1 text-sm text-white font-semibold bg-orange-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
