import { Link } from 'react-router-dom';

import loginBg from 'assets/images/login_bg.jpg';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import LoginForm from 'components/LoginForm';

function Login() {
  return (
    <div className="flex flex-1 w-full h-screen ">
      <div className="h-full sm:flex hidden flex-1 w-5/12 max-w-[604px]">
        <img
          src={loginBg}
          alt="Login page background"
          className="object-cover w-full"
        />
      </div>
      <div className="relative flex items-center flex-1 w-full mx-6 sm:w-7/12 sm:px-10 md:px-16 lg:px-32">
        <Link
          to="/"
          className="absolute top-10 sm:top-[52px]"
          aria-label="Products"
        >
          <Logo />
        </Link>
        <div className="-mt-10 md:mt-0 w-full md:max-w-[496px]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
