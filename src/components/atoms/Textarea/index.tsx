import { useState } from 'react';

import { DEFAULT_PLACEHOLDER } from '../../../constants';
import { textareaStyles } from '../../../styles';
import type { TextareaProps, TextareaVariantProps } from '../../../types';
import BodyText from '../BodyText';

interface Props extends TextareaProps, TextareaVariantProps {
  characterLimit?: number;
}

const Textarea = ({
  placeholder = DEFAULT_PLACEHOLDER,
  characterLimit,
  onChange,
  ...rest
}: Props) => {
  const [characterLimitCount, setCharacterLimitCount] = useState(0);
  const baseTextarea = (
    <textarea
      className={textareaStyles()}
      maxLength={characterLimit}
      placeholder={placeholder}
      onChange={(ev) => {
        setCharacterLimitCount(ev.currentTarget.value.length);
        if (onChange) {
          onChange(ev);
        }
      }}
      {...rest}
    />
  );

  if (characterLimit) {
    return (
      <div className="w-72 flex flex-col items-end">
        {baseTextarea}
        <BodyText size="xs">
          {characterLimitCount}/{characterLimit}
        </BodyText>
      </div>
    );
  }

  return baseTextarea;
};

export default Textarea;
