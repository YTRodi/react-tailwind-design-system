import { VariantProps } from 'class-variance-authority';
import { type TextareaHTMLAttributes } from 'react';

import { textareaStyles } from '../styles';

type TextareaStylesType = typeof textareaStyles;
type TextareaVariantProps = VariantProps<TextareaStylesType>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type { TextareaProps, TextareaStylesType, TextareaVariantProps };
