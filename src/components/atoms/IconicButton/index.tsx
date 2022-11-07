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
  appearance = 'solid',
  color,
  size,
  disabled,
  loading,
  icon,
  ...rest
}: Props) => {
  const buttonStylesProps = { appearance, color, size, disabled, loading };

  return (
    <button className={buttonStyles(buttonStylesProps)} {...rest}>
      {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
    </button>
  );
};

export default IconicButton;
