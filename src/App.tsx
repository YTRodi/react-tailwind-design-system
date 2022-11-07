import { Cog6ToothIcon } from '@heroicons/react/20/solid';

import { Button } from './components';
import IconicButton from './components/atoms/IconicButton';

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
      <IconicButton icon={<Cog6ToothIcon />} />
    </div>
  );
}

export default App;
