import { Cog6ToothIcon } from '@heroicons/react/20/solid';

import { Button, TextButton, IconButton, Textarea } from './components';
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
        <Textarea characterLimit={10} />
      </div>
    </AppProviders>
  );
}

export default App;
