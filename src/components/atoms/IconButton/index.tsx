import { buttonStyles } from '../../../styles/button';
import type { HeroIconReactElement } from '../../../types';
import type { Props as ButtonProps } from '../Button';
import Icon from '../Icon';
import Spinner from '../Spinner';
import { Tooltip, TooltipTrigger, TooltipContent } from '../Tooltip';

type OmittedProps = Omit<ButtonProps, 'label' | 'leftIcon' | 'rightIcon'>;
interface Props extends OmittedProps {
  icon: HeroIconReactElement;
}

const IconButton = ({
  colorScheme,
  size,
  loading,
  disabled,
  icon,
  ...rest
}: Props) => {
  const buttonStylesProps = { colorScheme, size, loading, disabled };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className={buttonStyles(buttonStylesProps)} {...rest}>
          {loading ? <Spinner /> : icon ? <Icon icon={icon} /> : null}
        </button>
      </TooltipTrigger>
      <TooltipContent>Tooltip for the icon button</TooltipContent>
    </Tooltip>
  );
};

export default IconButton;
