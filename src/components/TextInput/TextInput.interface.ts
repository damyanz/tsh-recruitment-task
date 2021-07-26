export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'text' | 'search';
  wrapperClassName?: string;
  label?: string;
}
