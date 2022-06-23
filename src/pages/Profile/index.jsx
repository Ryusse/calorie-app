import { LayoutIntern } from '@components/LayoutIntern';
import { CustomProfile, GridWrapper, Sidebar } from '@elements/organisms';

import UserDefault from '../../assets/images/user-default.png';

export const Profile = () => {
  return (
    <GridWrapper className="bg-primary-grey-700">
      <Sidebar />
      <LayoutIntern>
        <h1 className="mb-7 text-center text-heading-02 font-semibold">
          Mi perfil
        </h1>
        <div>
          <figure className="mx-auto w-28 rounded-full">
            <img
              className="h-full w-full object-cover"
              src={UserDefault}
              alt="profile"
            />
          </figure>
        </div>

        <CustomProfile />
      </LayoutIntern>
    </GridWrapper>
  );
};
