import { inputStyles } from '../../../styles';
import { InputVariantProps, OmittedInputProps } from '../../../types';

interface Props extends OmittedInputProps, InputVariantProps {}

const DEFAULT_PLACEHOLDER = 'Placeholder';

// TODO: base input -> TextInput, Dropdown, Stepper, Phone number
const Input = ({
  size,
  isInvalid,
  className,
  placeholder = DEFAULT_PLACEHOLDER,
  ...rest
}: Props) => (
  <input
    className={inputStyles({ size, isInvalid, class: className })}
    placeholder={placeholder}
    {...rest}
  />
);

export default Input;
