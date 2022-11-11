import type { ReactNode } from 'react';

import TooltipProvider from './TooltipProvider';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};

export default AppProviders;
