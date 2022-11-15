import { inputStyles } from '../../../styles';
import type {
  HeroIconReactElement,
  InputVariantProps,
  OmittedInputProps,
} from '../../../types';
import Icon from '../Icon';

interface Props extends OmittedInputProps, InputVariantProps {
  leftIcon?: HeroIconReactElement;
  rightIcon?: HeroIconReactElement;
}

const DEFAULT_PLACEHOLDER = 'Placeholder';

// TODO: base input -> TextInput, Dropdown, Stepper, Phone number
const Input = ({
  size,
  isInvalid,
  className,
  placeholder = DEFAULT_PLACEHOLDER,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  const hasIcon = leftIcon ?? rightIcon;

  if (hasIcon) {
    return (
      <div className="flex items-center">
        {leftIcon && (
          <div className="relative flex items-center">
            <Icon className="absolute left-3" icon={leftIcon} />
          </div>
        )}
        <input
          className={inputStyles({
            size,
            isInvalid,
            hasLeftIcon: Boolean(leftIcon),
            hasRightIcon: Boolean(rightIcon),
            class: className,
          })}
          placeholder={placeholder}
          {...rest}
        />
        {rightIcon && (
          <div className="relative flex items-center">
            <Icon className="absolute right-3" icon={rightIcon} />
          </div>
        )}
      </div>
    );
  }

  return (
    <input
      className={inputStyles({ size, isInvalid, class: className })}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
