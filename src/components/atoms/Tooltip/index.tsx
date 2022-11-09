import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { ComponentProps, ReactNode } from 'react';

import BodyText from '../BodyText';

import styles from './styles.module.css';

interface Props extends ComponentProps<typeof TooltipPrimitive.Content> {
  children: ReactNode;
}

const Content = ({ children, className: CN, ...rest }: Props) => {
  const className = CN ?? '';

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={`select-none py-1 px-2 bg-neutral-700 rounded-[.25rem] ${styles.content} ${className}`}
        {...rest}
      >
        {typeof children === 'string' ? (
          <BodyText className="text-white" size="sm">
            {children}
          </BodyText>
        ) : (
          children
        )}
        <TooltipPrimitive.Arrow className="fill-neutral-700" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = Content;
