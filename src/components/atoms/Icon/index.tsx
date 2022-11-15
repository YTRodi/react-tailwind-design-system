import React from 'react';

import { type HeroIconReactElement } from '../../../types';

interface Props {
  icon: HeroIconReactElement;
  className?: string;
}

const FIXED_ICON_SIZE = 'w-5 h-5';

const Icon = ({ icon, className }: Props) => {
  const classNameFromProps: string = icon.props.className
    ? icon.props.className
    : '';

  return React.cloneElement(icon, {
    className: `${FIXED_ICON_SIZE} ${classNameFromProps} ${className ?? ''}`,
    ...icon.props,
  });
};

export default Icon;
