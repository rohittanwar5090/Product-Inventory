import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import ViewProductsPage from './ViewProductsPage'
import TopViewedProductsPage from './TopViewedProductsPage'
import './AboutPage.css'
import Header from '../includes/header'
import UserStore from '../stores/UserStore'

const AboutPage = () => {
  const currentUser = UserStore.getCurrentUser()
  return (
    <div>
      <Header />
      <Carousel  data-testid="carousel" className="animate__animated animate__flipInX" >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      {/* <ViewProductsPage bool={true} /> */}

      <Container className="mt-4">
        <Row>
          <Col>
            <div className="jumbotron" >
              <h2 className='display-5 text-danger'>Welcome to the Product Inventory System</h2>
              <p className='text-white '>A React JS-based application is called Products Inventory.
                For a responsive user interface, it makes use of Bootstrap.
                You can start by browsing our inventory and using the search function to find the item you're looking for.
                For a better user experience, there is a bar chart that displays our most popular products.
                The fields you want to see on the products list page can also be customized.
                Once you sign in to our app, this app will unlock additional features for you.
                For that you'll need to register into our app first, by providing a few basic details.
              </p>
              <p>
                Once successfully registered, you can sign in when you're authenticated.
                When you log in as an authenticated user, you have access to a variety of features, including the ability to browse product details and add, delete, or alter products.
                Additionally, you have the choice of simultaneously uninstalling several products.
                By selecting your name from the navigation bar, you can also view information about yourself.
                What are you waiting for? There are many features in this. Come enjoy the Products Inventory by clicking that blue Sign in or Register button!
              </p>
              <hr className="my-4" />
              {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
              <p className="lead">
                <a  data-testid='viewProduct' className="btn btn-danger btn-lg" href="/viewproducts" >View Products </a>
              </p>
            </div>
          </Col>
          {currentUser ? null
            :
            (
              <Col md="auto">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Welcome!</Card.Title>
                    <Card.Text>
                      Already a User?
                    </Card.Text>

                    <Button role='signin' variant="danger" href="/signIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                      <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg > Sign in</Button>
                    <Card.Text>
                      New User?
                    </Card.Text>
                    <Button variant="danger" href="/register"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                      <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                    </svg> Register</Button>
                  </Card.Body>
                </Card>
              </Col>
            )}
        </Row>
      </Container>
      <TopViewedProductsPage />

    </div>
  )
}

export default AboutPage