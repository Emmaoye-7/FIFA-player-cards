import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar bg="dark" variant="dark" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            THE STARTING XI
          </Navbar.Brand>
        </Container>
      </Navbar>
      <main id="home" className="py-5">
        <Container>
          <header className="text-center mb-5">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Meet the squad
            </p>
            <h1 className="display-5 fw-bold">Players to watch</h1>
            <p className="lead text-secondary mb-0">
              Four standout talents, one beautiful game.
            </p>
          </header>
          <PlayersList />
        </Container>
      </main>
    </div>
  );
}

export default App;
