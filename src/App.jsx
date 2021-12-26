import React, { useState } from 'react';
import UseSteteExm from './components/UseSteteExm/UseStete';
import UseEffectExm from './components/UseEffectExm/UseEffect';
import { ThemeContext } from './components/UseContextExm/themeContext';
import UseContextExm from './components/UseContextExm/UseContext';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="main">
      <UseSteteExm />
      {/* <UseEffectExm /> */}

      <ThemeContext.Provider
        value={{
          theme,
          toggle: toggleTheme,
        }}
      >
        <UseContextExm />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
