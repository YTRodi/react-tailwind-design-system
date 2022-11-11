import type { ReactNode } from 'react';

import { TooltipProvider as TProvider } from '../components';

interface Props {
  children: ReactNode;
}

const TooltipProvider = ({ children }: Props) => (
  <TProvider>{children}</TProvider>
);

export default TooltipProvider;
