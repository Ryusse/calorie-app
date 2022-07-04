import { LayoutIntern } from '@components/LayoutIntern';
import {
  CustomProfile,
  GridWrapper,
  Header,
  Sidebar,
} from '@elements/organisms';

import UserDefault from '../../assets/images/user-default.png';

export const Profile = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <Header />
      <LayoutIntern>
        <h1 className="mb-7 text-center text-heading-01 font-semibold lg:mb-[3rem] lg:text-left">
          Mi perfil
        </h1>
        <div className="flex w-full flex-col lg:max-w-[40rem] lg:flex-row lg:gap-20">
          <figure className="mx-auto grid h-28 w-28 cursor-pointer rounded-full lg:mx-0 lg:w-[10rem]">
            <img
              className="h-full w-full object-cover"
              src={UserDefault}
              alt="profile"
            />
          </figure>
          <CustomProfile className="w-full lg:!mt-0" />
        </div>
      </LayoutIntern>
    </GridWrapper>
  );
};
