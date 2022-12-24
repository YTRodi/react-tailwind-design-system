import { cva } from 'class-variance-authority';

import { DEFAULT_INPUT_STYLES } from './input';

const dropdownStyles = cva(DEFAULT_INPUT_STYLES, {
  variants: {
    size: {
      big: ['py-4', 'px-3'],
      medium: ['py-2.5', 'px-3'],
      small: ['py-2', 'px-2.5', 'text-sm'],
    },
    isInvalid: {
      true: ['border-rose-400'],
    },
    hasLeftIcon: {
      true: 'pl-[38px]',
    },
    hasRightIcon: {
      true: 'pr-[38px]',
    },
  },
});

export { dropdownStyles };
