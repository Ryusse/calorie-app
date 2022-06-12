import Icon from '@elements/atoms/Icon';
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = ({ className }) => {
  return (
    <aside
      className={`relative bg-primary-grey-900 sticky top-0 col-span-2 h-screen flex flex-col py-14 shadow-01 
                  after:content-[''] after:bg-primary-grey-900 after:absolute after:top-0 after:left-0 after:w-[100vw] after:translate-x-[-100%] after:h-screen ${className}`}
    >
      <Link className="flex items-center gap-4 px-3" to="/">
        <Icon name="icLogo" className="mt-3" />
        <p className="text-primary-red-200 text-heading-04 font-semibold">
          Food diary
        </p>
      </Link>
      <nav className="flex flex-col mt-12 ">
        <ul>
          <li className="relative">
            <NavLink
              className="nav-link py-5 px-9 flex gap-3 items-center text-paragraph-02 text-primary-grey-300 font-medium after:content-[''] after:rounded-[10px] after:hidden after:absolute after:left-0 after:h-full after:w-[2.5px] after:bg-primary-red-300"
              to="/Statistics"
            >
              <Icon
                name="icStatistics"
                className={`icon-color-inherit nav-link fill-primary-grey-300`}
              />
              Estadísticas
            </NavLink>
          </li>

          <li className="relative">
            <NavLink
              className="nav-link py-5 px-9 flex gap-3 items-center text-paragraph-02 text-primary-grey-300 font-medium after:content-[''] after:rounded-[10px] after:hidden after:absolute after:left-0 after:h-full after:w-[2.5px] after:bg-primary-red-300"
              to="/Food"
            >
              <Icon
                name="icFood"
                className={`icon-color-inherit nav-link fill-primary-grey-300 mr-1`}
              />
              Alimentos
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto flex gap-3 items-center p-5 pl-9 cursor-pointer">
        <Icon name="icLogout" className="icon-color-inherit " />

        <p className="text-primary-red-300 text-paragraph-02 font-medium">
          Cerrar sesión
        </p>
      </div>
    </aside>
  );
};
