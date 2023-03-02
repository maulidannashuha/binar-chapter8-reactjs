// import logo from './logo.svg';
// import './App.css';
import { useRef, useState } from "react";
import { Button, Container, Form, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import logo512 from './logo.svg';

function App() {
  const emailInput = useRef(null)
  const passwordInput = useRef(null)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail(emailInput.current.value)
    setPassword(passwordInput.current.value)
  }

  return (
    <Container className="mt-5">
      <Image src={logo512} />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordInput} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Card>
        <Card.Body>
          Email : {email} <br/>
          Password : {password}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
