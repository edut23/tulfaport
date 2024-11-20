import './App.css';
import Introducing from './Sections/Introducing';
import Example from './Sections/Example';
import HighlightText from './Sections/Text';
import '@qpokychuk/sf-pro-display/index.css';
import '@qpokychuk/sf-pro-display/normal.css';
import '@qpokychuk/sf-pro-display/italic.css';
import Silos from './Sections/Silos';

function App() {
  return (
    <div className="App">
      <Introducing />
      <Example />
      <HighlightText />
      <Silos />
    </div>
  );
}

export default App;
