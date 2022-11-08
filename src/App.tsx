import { Cog6ToothIcon } from '@heroicons/react/20/solid';

import { Button, TextButton } from './components';
import IconButton from './components/atoms/IconButton';

function App() {
  return (
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
  );
}

export default App;
