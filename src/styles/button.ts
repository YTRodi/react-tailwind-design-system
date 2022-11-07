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
    appearance: {
      solid: [],
      text: [],
    },
    color: {
      primary: [
        'bg-brand-600',
        'text-white',
        'hover:bg-brand-700',
        'focus:outline-brand-700',
      ],
      secondary: [],
      tertiary: [],
    },
    size: {
      small: ['py-2', 'px-3'],
      medium: ['py-2.5', 'px-4'],
      big: ['p-4'],
    },
    disabled: {
      true: ['cursor-not-allowed', 'focus:outline-[0px]'],
    },
    loading: {
      true: ['cursor-wait', 'focus:outline-[0px]'],
    },
  },
  defaultVariants: {
    appearance: 'solid',
    color: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
  },
  compoundVariants: [
    {
      color: 'primary',
      loading: true,
      class: ['bg-brand-400', 'hover:bg-brand-400'],
    },
    {
      color: 'primary',
      disabled: true,
      class: ['bg-neutral-100', 'text-neutral-400', 'hover:bg-neutral-100'],
    },
    {
      // TODO: aquí puedo diferenciar si la "appearance" es "text" o si es "solid" (como tenia antes!!!)
      // TODO: el font size varia dependiendo si es solid o text
      size: 'small',
      class: ['text-sm'],
    },
  ],
});

export { DEFAULT_BUTTON_STYLES, buttonStyles };
