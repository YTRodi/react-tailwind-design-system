import { VariantProps } from 'class-variance-authority';

import { textButtonStyles } from '../styles';

type TextButtonStylesType = typeof textButtonStyles;
type TextButtonVariantProps = VariantProps<TextButtonStylesType>;

export type { TextButtonStylesType, TextButtonVariantProps };
