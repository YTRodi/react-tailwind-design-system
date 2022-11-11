import { cva } from 'class-variance-authority';

const DEFAULT_TEXT_BUTTON_STYLES = [
  'transition-all',
  'outline-none',
  'bg-transparent',
  'font-inter',
  'font-semibold',
  'flex',
  'justify-center',
  'items-center',
  'gap-2',
];
const textButtonStyles = cva(DEFAULT_TEXT_BUTTON_STYLES, {
  variants: {
    colorScheme: {
      primary: ['text-brand-600', 'bg-transparent', 'hover:text-brand-700'],
      secondary: ['text-neutral-600', 'hover:text-brand-700'],
    },
    size: {
      medium: ['text-sm'],
      big: ['text-base'],
      small: ['text-xs'],
    },
    loading: {
      true: ['cursor-wait', 'focus:outline-[0px]'],
    },
    disabled: {
      true: ['cursor-not-allowed', 'focus:outline-[0px]', '!text-neutral-400'],
    },
  },
  defaultVariants: {
    colorScheme: 'primary',
    size: 'medium',
    loading: false,
    disabled: false,
  },
  compoundVariants: [
    // Loading
    {
      colorScheme: 'primary',
      loading: true,
      disabled: false,
      class: ['text-brand-400', 'hover:text-brand-400'],
    },
    {
      colorScheme: 'secondary',
      loading: true,
      disabled: false,
      class: ['text-neutral-400', 'hover:text-neutral-400'],
    },
  ],
});

export { DEFAULT_TEXT_BUTTON_STYLES, textButtonStyles };
