import { Link } from 'react-router-dom';

import Button from 'components/Button';
import TextInput from 'components/TextInput';

function LoginForm() {
  return (
    <form className="flex flex-col w-full">
      <h1 className="text-3xl font-semibold leading-10 mb-7">Login</h1>
      <TextInput
        label="Username"
        placeholder="Enter username"
        wrapperClassName="mb-[22px]"
      />
      <TextInput
        type="password"
        label="Password"
        placeholder="Enter password"
      />
      <Button className="mb-4 mt-14">Log in</Button>
      <Link to="#" className="text-sm text-gray-500 underline">
        Forgot password?
      </Link>
    </form>
  );
}

export default LoginForm;
