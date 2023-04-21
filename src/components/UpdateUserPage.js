import React from 'react';
import Header from '../includes/header'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EditProductForm from '../includes/editProductForm'
import ProductActions from '../actions/ProductActions'
import { withRouter } from 'react-router-dom'
import ProductApi from '../data/ProductApi'
import UserActions from '../actions/UserActions';
import UserApi from '../data/UserApi';
import UserStore from '../stores/UserStore';
import UpdateUserForm from '../includes/UpdateUserForm';

class UpdateUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.updateProduct = this.updateProduct.bind(this);
        this.state={
            user: undefined
        }
    }

    componentDidMount() {    
        const currentUser = UserStore.getCurrentUser()    
        const uid = this.props.match.params.id      
        console.log("uuid",uid);          
        UserApi.getUserById(currentUser, (user)=>{            
            this.setState({ user })            
        })

    }
  
    
    updateProduct(email) {
        
        // {id: this.props.user.id, ...fields}
          UserActions.updateUserMethod(email);
          alert("User Updated Successfully!")
          this.props.history.push('/')
          window.location.reload()
    }
    render() {
        console.log(this.state.user);
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <Card className="text-center mt-5">
                                <Card.Body>
                                  <Card.Title>Edit Product</Card.Title>
                                  <Card.Text>
                                        <UpdateUserForm onUpdate={this.updateProduct} user={this.state.user}/> 
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

export default withRouter(UpdateUserPage) 