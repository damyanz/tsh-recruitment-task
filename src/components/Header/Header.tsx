import React from 'react';
import { Link } from 'react-router-dom';
import {
  BooleanParam,
  NumberParam,
  StringParam,
  useQueryParams,
} from 'use-query-params';

import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import TextInput from 'components/TextInput';

function Header() {
  const [urlParams, setUrlParams] = useQueryParams({
    page: NumberParam,
    search: StringParam,
    active: BooleanParam,
    promo: BooleanParam,
  });

  const handleFilterChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, type, checked, value } = e.target;
    setUrlParams({
      [name]: (type === 'checkbox' ? checked : value) || undefined,
      page: undefined,
    });
  };

  return (
    <header className="flex justify-center">
      <div className="max-w-[1224px] mx-6 sm:mx-8 flex-1 flex flex-row md:flex-row pb-8 pt-[52px] sm:py-12 items-center justify-between flex-wrap">
        <Link to="/" aria-label="Products">
          <Logo />
        </Link>
        <div className="flex flex-1 flex-col sm:flex-row min-w-full mt-7 md:mt-0 md:min-w-0 md:ml-16 lg:ml-[105px] order-3 md:order-2">
          <TextInput
            variant="search"
            placeholder="Search"
            name="search"
            value={urlParams.search || ''}
            wrapperClassName="flex flex-1 md:max-w-[392px]"
            onChange={handleFilterChange}
          />
          <div className="flex mt-6 space-x-6 sm:mt-0 sm:ml-6 md:mr-8 lg:space-x-8">
            <Checkbox
              id="filter-active"
              label="Active"
              name="active"
              checked={!!urlParams.active}
              onChange={handleFilterChange}
            />
            <Checkbox
              id="filter-promo"
              label="Promo"
              name="promo"
              checked={!!urlParams.promo}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <Link to="/login" className="order-2 md:order-3">
          <Button variant="secondary">Log in</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
