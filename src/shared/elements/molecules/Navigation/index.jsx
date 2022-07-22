import Icon from '@elements/atoms/Icon';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ onClose }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr] overflow-y-auto">
      <div className="border-t border-primary-grey-600 py-5 lg:border-0">
        <p className="text-paragraph-03 text-primary-grey-500 lg:text-paragraph-02">
          Menu principal
        </p>
        <nav className="mt-4">
          <ul className="text-paragraph-01">
            <li
              onClick={() => (width < 1023 ? onClose() : null)}
              className="relative"
            >
              <NavLink
                className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-500 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                to="/"
              >
                <Icon
                  name="icStatistics"
                  className={`icon-color-inherit nav-link fill-primary-grey-500`}
                />
                Estadísticas
              </NavLink>
            </li>

            <li
              onClick={() => (width < 1023 ? onClose() : null)}
              className="relative"
            >
              <NavLink
                className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-500 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                to="/food"
              >
                <Icon
                  name="icFood"
                  className={`icon-color-inherit nav-link mr-1 fill-primary-grey-500`}
                />
                Alimentos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="border-t border-primary-grey-600 py-5">
        <p className="text-paragraph-03 text-primary-grey-500 lg:text-paragraph-02">
          Preferencias
        </p>
        <nav className="mt-4">
          <ul className="text-paragraph-01">
            <li onClick={() => onClose} className="relative">
              <NavLink
                className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-500 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                to="/profile"
              >
                <Icon
                  name="icProfile"
                  className={`icon-color-inherit nav-link fill-primary-grey-500`}
                />
                Mi Perfil
              </NavLink>
            </li>

             <li
              onClick={() => (width < 1023 ? onClose() : null)}
              className="relative"
            >
              <NavLink
                className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-500 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
                to="/"
              >
                <Icon
                  name="icSetting"
                  className={`icon-color-inherit nav-link fill-primary-grey-500`}
                />
                Configuración
              </NavLink>
            </li>
          </ul>
        </nav>
      </div> */}

      <div className="mt-auto cursor-pointer border-t border-primary-grey-600 pt-5">
        <nav className="">
          <ul className="text-paragraph-01">
            <li
              onClick={() => (width < 1023 ? onClose() : null)}
              className="relative"
            >
              <div className="nav-link flex items-center gap-3 py-3 px-4 text-paragraph-02 font-medium text-primary-grey-500 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']">
                <Icon
                  name="icLogout"
                  className="icon-color-inherit fill-primary-grey-500"
                />

                <p className="text-paragraph-02 font-medium text-primary-grey-500">
                  Cerrar sesión
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
