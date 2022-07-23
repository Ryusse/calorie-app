import { useEffect, useState } from 'react';

import { Navigation } from '@elements/molecules';

import UserDefault from '../../../../assets/images/user-default.png';

export const MenuDashboardMobile = ({ open, refMenu, onClose }) => {
  const [userInfo, setUserInfo] = useState({ nombres: 'jajaja' });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUserInfo(userInfo);
    }
  }, []);

  return (
    <div className={`z-30 block lg:hidden`}>
      <div
        ref={refMenu}
        className={`fixed top-0 left-0 z-30 flex h-screen w-[16rem] flex-col bg-primary-grey-900 px-4 py-10 transition-all ease-linear ${
          open ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        <div>
          <figure className="mx-auto h-16 w-16 rounded-full">
            <img
              className="w-full object-cover"
              src={userInfo.foto ? userInfo.foto : UserDefault}
              alt="user profile"
            />
          </figure>

          <p className="mt-4 text-center text-paragraph-01 font-semibold">
            {userInfo.nombres}
          </p>
          <p className="mt-1 mb-4 text-center text-paragraph-03 text-primary-grey-300">
            @ {userInfo.nombres}
          </p>
        </div>
        <Navigation onClose={() => onClose} />
      </div>

      <div
        className={`fixed top-0 left-0 z-20 h-screen w-screen bg-others-transparency-grey-500 transition-all duration-300 ease-in-out lg:hidden
      ${open ? 'visible ' : 'invisible'}
      ${open ? 'opacity-100' : 'opacity-0'}
      `}
      ></div>
    </div>
  );
};
