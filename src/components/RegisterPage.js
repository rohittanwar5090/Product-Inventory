import React from 'react';
import Header from '../includes/header'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RegistrationForm from '../includes/registrationForm'
import UserActions from '../actions/UserActions'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.saveUser = this.saveUser.bind(this);
      }
  
      saveUser(user) {
          UserActions.addUser(user);
          this.props.history.push('/');
          alert("Registered Successfully! Please Sign in to continue.")
      }
    render() {
        return (
            <div>
                <Header />
                <Container  className="animate__animated animate__zoomInDown" >
                    <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <Card className="text-center mt-5">
                                <Card.Body>
                                  <Card.Title data-testid='Register'>Register</Card.Title>
                                  <Card.Text>
                                        <RegistrationForm onSave={this.saveUser} /> 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>        
            </div>
        )
    }
}

export default RegisterPage