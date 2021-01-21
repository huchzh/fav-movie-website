import './SigninScreen.css'
import { Container, Form, Button } from 'react-bootstrap';

const SigninScreen = () => {
    return (
        <div className="signinscreen">
            <Container>
                <Form>
                    <h1>Registration</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
        
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </Container>

            <Container>
                <Form>
                    <h1>Sign In</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
        
                    <Button variant="success" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default SigninScreen
