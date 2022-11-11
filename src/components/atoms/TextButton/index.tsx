import { textButtonStyles } from '../../../styles';
import type {
  HeroIconReactElement,
  OmittedButtonProps,
  TextButtonVariantProps,
} from '../../../types';
import Icon from '../Icon';
import Spinner from '../Spinner';

export interface Props extends OmittedButtonProps, TextButtonVariantProps {
  label: string;
  leftIcon?: HeroIconReactElement;
  rightIcon?: HeroIconReactElement;
}

const TextButton = ({
  label,
  colorScheme,
  size,
  loading,
  disabled,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  const textButtonStylesProps = { colorScheme, size, loading, disabled };

  return (
    <button className={textButtonStyles(textButtonStylesProps)} {...rest}>
      {leftIcon ? <Icon icon={leftIcon} /> : null}
      {label}
      {loading ? <Spinner /> : rightIcon ? <Icon icon={rightIcon} /> : null}
    </button>
  );
};

export default TextButton;
