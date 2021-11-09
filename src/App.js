import React from 'react';
import abbasid from './images/abbasid.png';
import chinese from './images/chinese.png';
import delhi from './images/delhi.png';
import england from './images/england.png';
import french from './images/french.svg';
import hre from './images/hre.png';
import mongols from './images/mongols.png';
import rus from './images/rus.png';
import './App.css';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardGroup>
              <Card>
                <Card.Img variant="top" src={abbasid} />
                <Card.Body>
                  <Card.Title>England</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={chinese} />
                <Card.Body>
                  <Card.Title>Chinese</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={delhi} />
                <Card.Body>
                  <Card.Title>Delhi</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={england} />
                <Card.Body>
                  <Card.Title>England</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={french} />
                <Card.Body>
                  <Card.Title>French</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={hre} />
                <Card.Body>
                  <Card.Title>Holy Roman Empire</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={mongols} />
                <Card.Body>
                  <Card.Title>Mongols</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={rus} />
                <Card.Body>
                  <Card.Title>Rus</Card.Title>
                </Card.Body>
              </Card>
              </CardGroup>
      </header>
    </div>
  );
}

export default App;
