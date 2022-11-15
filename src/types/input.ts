import { VariantProps } from 'class-variance-authority';
import { type InputHTMLAttributes } from 'react';

import { inputStyles } from '../styles';

type InputStylesType = typeof inputStyles;
type InputVariantProps = VariantProps<InputStylesType>;
type OmittedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export type { OmittedInputProps, InputStylesType, InputVariantProps };
