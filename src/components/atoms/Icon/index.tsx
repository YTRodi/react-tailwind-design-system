import React from 'react';

import { HeroIcon } from '../../../types';

interface Props {
  icon: React.ReactElement<HeroIcon>;
}

const FIXED_ICON_SIZE = 'w-5 h-5';

const Icon = ({ icon }: Props) => {
  const classNameFromProps: string = icon.props.className
    ? icon.props.className
    : '';

  return React.cloneElement(icon, {
    className: `${FIXED_ICON_SIZE} ${classNameFromProps}`,
    ...icon.props,
  });
};

export default Icon;
