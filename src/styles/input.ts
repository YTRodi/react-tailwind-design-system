import { cva } from 'class-variance-authority';

const DEFAULT_INPUT_STYLES = [
  'transition-all',
  'border',
  'border-neutral-400',
  'rounded-lg',
  'font-inter',
  'text-neutral-900',
  'placeholder:text-neutral-400',
  'hover:border-neutral-500',
  'outline',
  'outline-2',
  'outline-transparent',
  'focus:outline-brand-200',
  'focus:border-brand-500',
];

const inputStyles = cva(DEFAULT_INPUT_STYLES, {
  variants: {
    size: {
      big: ['py-4', 'px-3'],
      medium: ['py-2.5', 'px-3'],
      small: ['py-2', 'px-2.5', 'text-sm'],
    },
    isInvalid: {
      true: ['border-rose-400'],
    },
  },
});

export { DEFAULT_INPUT_STYLES, inputStyles };
