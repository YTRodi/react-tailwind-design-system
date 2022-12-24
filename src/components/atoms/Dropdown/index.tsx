import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { DropdownVariantProps, OmittedDropdownProps } from '../../../types';
import BodyText from '../BodyText';
import Input, { Props as InputProps } from '../Input';

interface Props
  extends OmittedDropdownProps,
    DropdownVariantProps,
    InputProps {}

const Dropdown = (props: Props) => {
  // TODO: me quedé acá, agregando los items !!!!! (quizás por renderProps renderizar los items ???)
  // TODO: me quedé acá, agregando los items !!!!! (quizás por renderProps renderizar los items ???)
  // TODO: me quedé acá, agregando los items !!!!! (quizás por renderProps renderizar los items ???)
  // TODO: me quedé acá, agregando los items !!!!! (quizás por renderProps renderizar los items ???)
  // TODO: me quedé acá, agregando los items !!!!! (quizás por renderProps renderizar los items ???)
  // TODO: me quedé acá, agregando los items !!!!! (quizás por renderProps renderizar los items ???)

  return (
    <Menu>
      <Input
        {...props}
        rightIcon={
          <Menu.Button>
            <ChevronDownIcon />
          </Menu.Button>
        }
      />
      <Menu.Items>
        <Menu.Item>
          <BodyText>Account</BodyText>
        </Menu.Item>
        <Menu.Item>
          <BodyText>Account</BodyText>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
