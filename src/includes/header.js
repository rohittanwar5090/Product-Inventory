import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import UserActions from '../actions/UserActions'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import UserStore from '../stores/UserStore'
import UserApi from '../data/UserApi'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }
  }

  componentDidMount() {
    //const currentUser = UserStore.getCurrentUser()
    const userId = UserStore.getCurrentUser()
    
    
    UserApi.getUserById(userId, (user) => {
      this.setState({ user })
    
    })    
  }
  

  render() {
    const currentUser = UserStore.getCurrentUser()        
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
          <Navbar.Brand href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
           </svg></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="/">About</Nav.Link> */}
              {/* <NavDropdown title="Products" id="basic-nav-dropdown"> */}
              <Nav.Link style={{color : "white"}} href="/viewProducts">View Products</Nav.Link>
              <Nav.Link style={{color : "white"}} href="/topViewedProducts">Top Viewed Products</Nav.Link>
              {currentUser ? <Nav.Link style={{color : "white"}} href="/addNewProduct">Add New Products</Nav.Link> : null}
              {/* </NavDropdown> */}
            </Nav>
            {currentUser ? <Navbar.Text><i>Hello,</i>&nbsp;
              <a href={`/userDetails/${this.state.user.id}`}>{this.state.user.firstName}&nbsp;</a></Navbar.Text>
              :
              null}
          </Navbar.Collapse>
          {currentUser ? <Button className='btn-danger' onClick={() => {
            UserActions.signoutUser()
            this.props.history.push('/')
          }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg> Sign Out
          </Button> : null}
          {!currentUser ? <Button className='btn-danger' onClick={() => {
            this.props.history.push('/signIn')
          }}>Sign In
          </Button> : null}
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Header)
