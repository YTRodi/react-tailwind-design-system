import { buttonStyles } from '../../../styles';
import type {
  ButtonVariantProps,
  HeroIconReactElement,
  OmittedButtonProps,
} from '../../../types';
import Icon from '../Icon';
import Spinner from '../Spinner';

export interface Props extends OmittedButtonProps, ButtonVariantProps {
  label?: string;
  leftIcon?: HeroIconReactElement;
  rightIcon?: HeroIconReactElement;
}

const Button = ({
  label,
  colorScheme,
  size,
  loading,
  disabled,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  const buttonStylesProps = { colorScheme, size, loading, disabled };

  return (
    <button className={buttonStyles(buttonStylesProps)} {...rest}>
      {loading ? null : leftIcon ? <Icon icon={leftIcon} /> : null}
      {label}
      {loading ? <Spinner /> : rightIcon ? <Icon icon={rightIcon} /> : null}
    </button>
  );
};

export default Button;
