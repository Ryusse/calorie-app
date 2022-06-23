import { useRef, useState } from 'react';

import Icon from '@elements/atoms/Icon';
import { MenuDashboardMobile } from '@elements/molecules';
import { useOutsideClick } from '@hooks/useOutsideClick';

import UserDefault from '../../../../assets/images/user-default.png';

export const HeaderDashboardaMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef();

  useOutsideClick(ref, () => setIsMenuOpen(false));

  return (
    <>
      <header className="relative sticky top-0 z-20 flex w-full items-center justify-between bg-primary-grey-900 p-4 shadow-01 md:px-8 lg:hidden">
        <Icon name="icMenu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <div className="flex items-center gap-2">
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
