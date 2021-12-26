import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const UseStete = () => {
  const getInitialeState = () => true;

  const [visible, setVisibylity] = useState(getInitialeState);

  const handleClick = () => {
    setVisibylity(prevState => !prevState);
  };

  return (
    <div className="main">
      <h1>What is React?</h1>

      <Button variant="primary" onClick={handleClick}>
        Show
      </Button>

      {visible && (
        <Card>
          <Card.Body>
            <Card.Title>
              A JavaScript library for building fast Apps!
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ex
              doloribus atque, aliquam autem ut.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UseStete;
