import React, { useState } from 'react';
import Login from './UserAuth/Login';
import Register from './UserAuth/Register';
import MainMenu from './MainMenu/MainMenu';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Container className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="ml-auto">
          {isLoggedIn ? (
            <>
              <Navbar.Text>Signed in as: {user}</Navbar.Text>
              <Button variant="outline-light" onClick={() => setIsLoggedIn(false)}>Logout</Button>
            </>
          ) : null}
        </Nav>
      </Navbar>
      <div className="mt-5">
        {!isLoggedIn ? (
          <>
            {showRegister ? (
              <Register setShowRegister={setShowRegister} />
            ) : (
              <>
                <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
              </>
            )}
          </>
        ) : (
          <MainMenu />
        )}
      </div>
    </Container>
  );
}

export default App;
