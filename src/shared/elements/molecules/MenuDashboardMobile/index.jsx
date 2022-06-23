import Icon from '@elements/atoms/Icon';
import { NavLink } from 'react-router-dom';

import UserDefault from '../../../../assets/images/user-default.png';

export const MenuDashboardMobile = ({ open, refMenu, onClose }) => {
  return (
    <div className={`z-30 block`}>
      <div
        ref={refMenu}
        className={`fixed top-0 left-0 z-30 flex h-screen w-[16rem] flex-col bg-primary-grey-900 px-4 py-10 transition-all ease-linear ${
          open ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        <div>
          <figure className="mx-auto h-16 w-16 rounded-full">
            <img
              src={UserDefault}
              className="h-full w-full object-cover"
              alt="user profile"
            />
          </figure>

          <p className="mt-4 text-center text-paragraph-01 font-semibold">
            Joel Angel
          </p>
          <p className="mt-1 mb-4 text-center text-paragraph-03 text-primary-grey-300">
            @joelangel99
          </p>
        </div>

        <div className="overflow-y-auto">
          <div className="border-t border-primary-grey-600 py-5">
            <p className="text-paragraph-03 text-primary-grey-300">
              Menu principal
            </p>
            <nav className="mt-4">
              <ul className="text-paragraph-01">
                <li onClick={() => onClose()} className="relative">
                  <NavLink
                    className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-300 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                    to="/Statistics"
                  >
                    <Icon
                      name="icStatistics"
                      className={`icon-color-inherit nav-link fill-primary-grey-300`}
                    />
                    Estadísticas
                  </NavLink>
                </li>

                <li onClick={() => onClose()} className="relative">
                  <NavLink
                    className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-300 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                    to="/Food"
                  >
                    <Icon
                      name="icFood"
                      className={`icon-color-inherit nav-link mr-1 fill-primary-grey-300`}
                    />
                    Alimentos
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="border-t border-primary-grey-600 py-5">
            <p className="text-paragraph-03 text-primary-grey-300">
              Preferencias
            </p>
            <nav className="mt-4">
              <ul className="text-paragraph-01">
                <li onClick={() => onClose()} className="relative">
                  <NavLink
                    className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-300 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                    to="/profile"
                  >
                    <Icon
                      name="icProfile"
                      className={`icon-color-inherit nav-link fill-primary-grey-300`}
                    />
                    Mi Perfil
                  </NavLink>
                </li>

                <li onClick={() => onClose()} className="relative">
                  <NavLink
                    className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-300 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                    to="/"
                  >
                    <Icon
                      name="icSetting"
                      className={`icon-color-inherit nav-link fill-primary-grey-300`}
                    />
                    Configuración
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-primary-grey-600 pt-5">
            <nav className="">
              <ul className="text-paragraph-01">
                <li onClick={() => onClose()} className="relative">
                  <div className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-300 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']">
                    <Icon
                      name="icLogout"
                      className="icon-color-inherit fill-primary-grey-300"
                    />

                    <p className="text-paragraph-02 font-medium text-primary-grey-300">
                      Cerrar sesión
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
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
