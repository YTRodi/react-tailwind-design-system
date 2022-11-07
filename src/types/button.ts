import { VariantProps } from 'class-variance-authority';

import { buttonStyles } from '~/styles/button';

type ButtonStylesType = typeof buttonStyles;
type ButtonVariantProps = VariantProps<ButtonStylesType>;

export type { ButtonStylesType, ButtonVariantProps };
