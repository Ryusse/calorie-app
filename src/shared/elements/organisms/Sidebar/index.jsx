import Icon from '@elements/atoms/Icon';
import { Navigation } from '@elements/molecules';
import { Link } from 'react-router-dom';

export const Sidebar = ({ className }) => {
  return (
    <aside
      className={` sticky top-0 z-30  hidden h-screen flex-col border-r border-primary-grey-600 bg-primary-grey-900     py-6 after:absolute after:top-0 after:left-0 
                  after:h-screen after:w-[100vw] after:translate-x-[-100%] after:bg-primary-grey-900 after:content-[''] lg:col-span-3 lg:row-span-2 lg:flex lg:px-6 xl:col-span-2 ${className}`}
    >
      <Link className="flex items-center gap-4 px-3" to="/">
        <Icon name="icLogo" className="mt-3" />
        <p className="text-heading-04 font-semibold text-primary-red-200">
          Food diary
        </p>
      </Link>
      <div className="mt-7 h-full">
        <Navigation />
      </div>
    </aside>
  );
};
