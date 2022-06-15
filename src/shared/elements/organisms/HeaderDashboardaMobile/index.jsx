import Icon from '@elements/atoms/Icon';
import { MenuDashboardMobile } from '@elements/molecules';

import UserProfile from '../../../../assets/images/user-profile.png';

export const HeaderDashboardaMobile = () => {
  return (
    <>
      <header className="relative sticky top-0 z-20 flex w-full items-center justify-between bg-primary-grey-900 p-4 shadow-01 lg:hidden">
        <Icon name="icMenu" />
        <div className="flex items-center gap-2">
          <Icon name="icLogo" className="mt-3" />
          <p className="text-heading-04 font-semibold text-primary-red-200">
            Food diary
          </p>
        </div>
        <div className="">
          <figure className="h-7 w-7">
            <img
              className="w-full object-cover"
              src={UserProfile}
              alt="user profile"
            />
          </figure>
        </div>
      </header>
      <MenuDashboardMobile />
    </>
  );
};
