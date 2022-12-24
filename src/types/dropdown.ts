import { VariantProps } from 'class-variance-authority';
import { type InputHTMLAttributes } from 'react';

import { dropdownStyles } from '../styles';

type DropdownStylesType = typeof dropdownStyles;
type DropdownVariantProps = VariantProps<DropdownStylesType>;
type OmittedDropdownProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

export type { OmittedDropdownProps, DropdownStylesType, DropdownVariantProps };
