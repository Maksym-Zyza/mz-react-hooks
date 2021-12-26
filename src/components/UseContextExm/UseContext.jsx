import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { Button } from 'react-bootstrap';

const UseContext = () => {
  const { theme } = useContext(ThemeContext);
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>{theme}</h1>
      <Button variant="primary" onClick={toggle}>
        Toogle theme
      </Button>
    </div>
  );
};

export default UseContext;
