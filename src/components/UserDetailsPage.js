import React from 'react'
import Header from '../includes/header'
import Card from 'react-bootstrap/Card'
import UserApi from '../data/UserApi'
import UserStore from '../stores/UserStore'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class UserDetailsPage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: ""
        }
        if(UserStore.getCurrentUser() == undefined) {
            alert("User not signed in.")
            props.history.push('/viewProducts')
        }
    }

    componentDidMount() {        
        const userId = UserStore.getCurrentUser()
        UserApi.getUserById(userId, (user)=>{
            this.setState({ user })
        })
    }
    componentWillUnmount(){
        this.setState({})
    }
    
    render() {
        const uid = this.props.match.params.id        
        return (
            <div>
                <Header />
                <Container className="mt-5">
                    <Row>
                        <Col></Col>
                        <Col md="auto">
                            <Card style={{ width: '18rem' }}>
                            
                                <Card.Img variant="bottom" src={`https://robohash.org/${this.props.match.params.id}/478/185`} />
                                <Card.Header><i>Hello, </i><b>{this.state.user.firstName} {this.state.user.lastName}</b></Card.Header>
                                <ListGroup variant="flush">
                                  <ListGroup.Item><b>User Id:</b> {this.state.user.email}</ListGroup.Item>
                                  <ListGroup.Item><b> Password:</b> {this.state.user.password}</ListGroup.Item>
                                  <ListGroup.Item><b>Location:</b> {this.state.user.location}</ListGroup.Item>
                                  <ListGroup.Item><b> Mobile:</b> {this.state.user.mobileNumber}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Button variant='light'><Link to={`/updateDetails/${uid}`} >Edit</Link></Button>
                        </Col>
                        <Col></Col>
                    </Row>                    
                </Container>                
            </div>
        )
    }
}
export default UserDetailsPage