import { Cog6ToothIcon } from '@heroicons/react/20/solid';

import { Button, TextButton, IconButton } from './components';
import AppProviders from './context';

function App() {
  return (
    <AppProviders>
      <div>
        <Button
          disabled
          loading
          label="Click me!"
          leftIcon={<Cog6ToothIcon />}
          rightIcon={<Cog6ToothIcon />}
        />
        <IconButton icon={<Cog6ToothIcon />} />
        <TextButton disabled label="HolaMundo" />
      </div>
    </AppProviders>
  );
}

export default App;
