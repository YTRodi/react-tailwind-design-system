import { cva, VariantProps } from 'class-variance-authority';

const bodyTextStyles = cva('', {
  variants: {
    size: {
      lg: 'text-lg',
      base: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },
    weight: {
      normal: 'font-normal',
      semi: 'font-semibold',
    },
    capitalized: {
      true: 'uppercase',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    capitalized: false,
  },
});

interface Props extends VariantProps<typeof bodyTextStyles> {
  children: React.ReactNode;
  className?: string;
}

const BodyText = ({ children, className, ...rest }: Props) => (
  <p className={bodyTextStyles({ class: className, ...rest })}>{children}</p>
);

export default BodyText;
