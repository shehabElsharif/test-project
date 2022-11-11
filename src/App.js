import { useState } from 'react';
import './index.css';
import ColorBox from './ColorBox.js';
import ColorInput from './ColorInput';

function App() {
  const [colorName, setcolorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <ColorBox 
      colorName={colorName}
      />
      <ColorInput
      handleSubmit={handleSubmit}
      colorName={colorName}
      setcolorName={setcolorName} />
    </div>
  );
}

export default App;
