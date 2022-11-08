import { cva } from 'class-variance-authority';

const DEFAULT_BUTTON_STYLES = [
  'transition-all',
  'rounded-lg',
  'font-inter',
  'text-base',
  'font-semibold',
  'focus:outline-none',
  'flex',
  'justify-center',
  'items-center',
  'gap-2',
];
const buttonStyles = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    colorScheme: {
      primary: [
        'bg-brand-600',
        'text-white',
        'hover:bg-brand-700',
        'focus:outline-brand-700',
      ],
      secondary: [
        'bg-neutral-100',
        'hover:bg-neutral-200',
        'focus:outline-neutral-200',
      ],
      tertiary: [
        'bg-transparent',
        'text-neutral-600',
        'hover:bg-neutral-100',
        'focus:outline-neutral-100',
      ],
    },
    size: {
      medium: ['py-2.5', 'px-4'],
      big: ['p-4'],
      small: ['py-2', 'px-3', 'text-sm'],
    },
    loading: {
      true: ['cursor-wait', 'focus:outline-[0px]'],
    },
    disabled: {
      true: ['cursor-not-allowed', 'focus:outline-[0px]'],
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
      class: ['bg-brand-400', 'hover:bg-brand-400'],
    },
    {
      colorScheme: 'secondary',
      loading: true,
      disabled: false,
      class: ['text-neutral-600', 'bg-neutral-100', 'hover:bg-neutral-100'],
    },
    {
      colorScheme: 'tertiary',
      loading: true,
      disabled: false,
      class: ['text-neutral-500', 'bg-transparent', 'hover:bg-transparent'],
    },

    // Disabled
    {
      colorScheme: 'primary',
      disabled: true,
      class: ['bg-neutral-100', 'text-neutral-400', 'hover:bg-neutral-100'],
    },
    {
      colorScheme: 'secondary',
      disabled: true,
      class: ['bg-neutral-100', 'text-neutral-400', 'hover:bg-neutral-100'],
    },
    {
      colorScheme: 'tertiary',
      disabled: true,
      class: ['bg-transparent', 'text-neutral-400', 'hover:bg-transparent'],
    },
  ],
});

export { DEFAULT_BUTTON_STYLES, buttonStyles };
