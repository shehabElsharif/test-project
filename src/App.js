import { useState } from 'react';
import './index.css';

function App() {
  const [colorName, setcolorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <div className="App">
      <div className='colorBox'
      style={{backgroundColor: colorName}}>
      </div>
      <form action="submit" onSubmit={(e) =>{handleSubmit(e)}}>

          <label htmlFor="input">input</label>
          
          <input
                autoFocus
                id='colorName'
                type='text'
                placeholder='write a color of choice'
                required
                value={colorName}
                onChange={(e) => setcolorName(e.target.value)}
            />
      </form>
    </div>
  );
}

export default App;
