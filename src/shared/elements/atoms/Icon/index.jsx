import React from 'react';

import Add from './icons/icAdd';
import Close from './icons/icClose';
import Food from './icons/icFood';
import Logo from './icons/icLogo';
import Logout from './icons/icLogout';
import Menu from './icons/icMenu';
import Profile from './icons/icProfile';
import Setting from './icons/icSetting';
import Statistics from './icons/icStatistics';

const iconTypes = {
  icClose: {
    component: Close,
    alt: 'Close',
  },

  icAdd: {
    component: Add,
    alt: 'Add',
  },

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

  icSetting: {
    component: Setting,
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
