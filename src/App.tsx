import { BodyText } from './components/atoms';

function App() {
  return (
    <div className="App">
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>

      <div className="flex gap-6">
        <div>
          <BodyText size="lg">Font normal</BodyText>
          <BodyText>Font normal</BodyText>
          <BodyText size="sm">Font normal</BodyText>
          <BodyText size="xs">Font normal</BodyText>
        </div>

        <div>
          <BodyText size="lg" weight="semi">
            Font semibold
          </BodyText>
          <BodyText weight="semi">Font semibold</BodyText>
          <BodyText size="sm" weight="semi">
            Font semibold
          </BodyText>
          <BodyText size="xs" weight="semi">
            Font semibold
          </BodyText>
        </div>

        <div>
          <BodyText capitalized size="lg" weight="semi">
            Semibold capitalized
          </BodyText>
          <BodyText capitalized weight="semi">
            Semibold capitalized
          </BodyText>
          <BodyText capitalized size="sm" weight="semi">
            Semibold capitalized
          </BodyText>
          <BodyText capitalized size="xs" weight="semi">
            Semibold capitalized
          </BodyText>
        </div>
      </div>
    </div>
  );
}

export default App;
