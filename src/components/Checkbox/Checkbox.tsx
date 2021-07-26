import { ReactComponent as TickIcon } from 'assets/svg/tick.svg';

import { CheckboxProps } from './Checkbox.interface';

function Checkbox({ label, id, ...rest }: CheckboxProps) {
  return (
    <div className="flex items-center">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          className="w-6 h-6 transition duration-150 bg-white rounded appearance-none cursor-pointer peer ring-1 ring-inset ring-gray-300 checked:bg-blue-primary checked:ring-opacity-0"
          {...rest}
        />
        <TickIcon className="text-white transition-opacity duration-150 opacity-0 pointer-events-none center-absolute peer-checked:opacity-100" />
      </div>
      {label && (
        <label className="inline-block pl-2 text-sm font-semibold" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
