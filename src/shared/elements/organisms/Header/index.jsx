import { useRef, useState } from 'react';

import Icon from '@elements/atoms/Icon';
import { MenuDashboardMobile } from '@elements/molecules';
import { useOutsideClick } from '@hooks/useOutsideClick';

import UserDefault from '../../../../assets/images/user-default.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => setIsMenuOpen(false));

  return (
    <>
      <header className="relative sticky top-0 z-20 col-span-4 row-span-1 flex h-auto w-full items-center justify-between border-b border-primary-grey-600 bg-primary-grey-900 p-4 md:col-span-8 md:px-8 lg:col-span-9 lg:col-start-4 lg:col-start-4 lg:row-start-1 lg:justify-end lg:py-6 xl:col-span-10 xl:col-start-3">
        <Icon
          name="icMenu"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className="flex items-center gap-2 lg:hidden">
          <Icon name="icLogo" className="mt-3" />
          <p className="text-heading-04 font-semibold text-primary-red-200">
            Food diary
          </p>
        </div>
        <figure className="h-7 w-7">
          <img
            className="w-full object-cover"
            src={UserDefault}
            alt="user profile"
          />
        </figure>
      </header>
      <MenuDashboardMobile
        open={isMenuOpen}
        refMenu={ref}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};