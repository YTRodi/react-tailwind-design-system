import { cva } from 'class-variance-authority';

const DEFAULT_TEXTAREA_STYLES = [
  'py-2',
  'px-2.5',
  'border',
  'border-neutral-400',
  'rounded-lg',
  'font-inter',
  'text-neutral-900',
  'text-base',
  'placeholder:text-neutral-400',
  'hover:border-neutral-500',
  'outline',
  'outline-2',
  'outline-transparent',
  'focus:outline-brand-200',
  'focus:border-brand-500',
  'min-h-[6.25rem]',
];

const textareaStyles = cva(DEFAULT_TEXTAREA_STYLES);

export { DEFAULT_TEXTAREA_STYLES, textareaStyles };
