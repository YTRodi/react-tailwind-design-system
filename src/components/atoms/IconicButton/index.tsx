import { buttonStyles } from '../../../styles/button';
import type { HeroIconReactElement } from '../../../types';
import type { Props as ButtonProps } from '../Button';
import Icon from '../Icon';
import Spinner from '../Spinner';

type OmittedProps = Omit<ButtonProps, 'label' | 'leftIcon' | 'rightIcon'>;
interface Props extends OmittedProps {
  icon: HeroIconReactElement;
}

const IconicButton = ({
  colorScheme,
  size,
  loading,
  disabled,
  icon,
  ...rest
}: Props) => {
  const buttonStylesProps = { colorScheme, size, loading, disabled };

  return (
    <button className={buttonStyles(buttonStylesProps)} {...rest}>
      {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
    </button>
  );
};

export default IconicButton;

// TODO: tooltip
