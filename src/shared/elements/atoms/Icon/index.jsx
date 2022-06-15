import React from 'react';

import Food from './icons/icFood';
import Logo from './icons/icLogo';
import Logout from './icons/icLogout';
import Menu from './icons/icMenu';
import Profile from './icons/icProfile';
import Statistics from './icons/icStatistics';

const iconTypes = {
  icFood: {
    component: Food,
    alt: 'Food',
  },

  icLogo: {
    component: Logo,
    alt: 'Logo',
  },

  icLogout: {
    component: Logout,
    alt: 'Logout',
  },

  icMenu: {
    component: Menu,
    alt: 'Menu',
  },

  icProfile: {
    component: Profile,
    alt: 'Profile',
  },

  icStatistics: {
    component: Statistics,
    alt: 'Statistics',
  },
};

const IconComponent = ({ name, ...props }) => {
  const Icon = iconTypes[name] ? iconTypes[name] : null;
  return <Icon.component {...props} alt={Icon?.alt} />;
};

export default IconComponent;
