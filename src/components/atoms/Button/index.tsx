import React from 'react';

import { buttonStyles } from '../../../styles/button';
import type { ButtonVariantProps, HeroIconReactElement } from '../../../types';
import Icon from '../Icon';
import Spinner from '../Spinner';

type OmittedButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'disabled'
>;
export interface Props extends OmittedButtonProps, ButtonVariantProps {
  label?: string;
  leftIcon?: HeroIconReactElement;
  rightIcon?: HeroIconReactElement;
}

const Button = ({
  label,
  appearance = 'solid',
  color,
  size,
  disabled,
  loading,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  const buttonStylesProps = { appearance, color, size, disabled, loading };

  // TODO: (feature) si no hay label y solo vienen por props iconLeft o iconRight mostrar un <IconicButton />

  return (
    <button className={buttonStyles(buttonStylesProps)} {...rest}>
      {loading ? null : leftIcon ? <Icon icon={leftIcon} /> : null}
      {label}
      {loading ? <Spinner /> : rightIcon ? <Icon icon={rightIcon} /> : null}
    </button>
  );
};

export default Button;
