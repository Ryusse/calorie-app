import UserProfile from '../../../../assets/images/user-profile.png';

export const MenuDashboardMobile = ({ open = true }) => {
  return (
    <div className="fixed top-0 left-0 z-20 h-screen w-screen bg-others-transparency-grey-500">
      <div
        className={`absolute top-0 left-0  h-full w-[16rem] bg-primary-grey-900 px-3 transition duration-200 ease-in-out
      ${open ? 'translate-x-0' : 'translate-x-[-100%]'}`}
      >
        <figure className="mt-10 h-16 w-16 rounded-full border border-primary-grey-200 p-2">
          <img
            src={UserProfile}
            className="h-full w-full object-cover"
            alt="user profile"
          />
        </figure>

        <nav>
          <ul>
            <li>Statistics</li>
            <li>Food</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
