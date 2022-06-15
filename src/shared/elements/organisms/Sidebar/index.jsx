import Icon from '@elements/atoms/Icon';
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = ({ className }) => {
  return (
    <aside
      className={`relative sticky top-0 col-span-2 flex h-screen flex-col bg-primary-grey-900 py-14 shadow-01 
                  after:absolute after:top-0 after:left-0 after:h-screen after:w-[100vw] after:translate-x-[-100%] after:bg-primary-grey-900 after:content-[''] ${className}`}
    >
      <Link className="flex items-center gap-4 px-3" to="/">
        <Icon name="icLogo" className="mt-3" />
        <p className="text-heading-04 font-semibold text-primary-red-200">
          Food diary
        </p>
      </Link>
      <nav className="mt-12 flex flex-col ">
        <ul>
          <li className="relative">
            <NavLink
              className="nav-link flex items-center gap-3 py-5 px-9 text-paragraph-02 font-medium text-primary-grey-300 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
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
              className="nav-link flex items-center gap-3 py-5 px-9 text-paragraph-02 font-medium text-primary-grey-300 after:absolute after:left-0 after:hidden after:h-full after:w-[2.5px] after:rounded-[10px] after:bg-primary-red-300 after:content-['']"
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
      <div className="mt-auto flex cursor-pointer items-center gap-3 p-5 pl-9">
        <Icon name="icLogout" className="icon-color-inherit " />

        <p className="text-paragraph-02 font-medium text-primary-red-300">
          Cerrar sesión
        </p>
      </div>
    </aside>
  );
};
