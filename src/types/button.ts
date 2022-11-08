import { VariantProps } from 'class-variance-authority';
import React from 'react';

import { buttonStyles } from '~/styles';

type ButtonStylesType = typeof buttonStyles;
type ButtonVariantProps = VariantProps<ButtonStylesType>;
type OmittedButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'disabled'
>;

export type { ButtonStylesType, ButtonVariantProps, OmittedButtonProps };
