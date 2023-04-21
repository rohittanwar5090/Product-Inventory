import React from 'react'
import Products from '../components/Products'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProductApi from '../data/ProductApi'
import UserStore from '../stores/UserStore'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import TopViewedProductsPage from '../components/TopViewedProductsPage'

export default class CardsView extends React.Component {

  state = {
    query: '',
    checkedProducts: {},
    columns: {
      productName: true,
      manufacturer: true,
      price: true,
      quantity: true,
      checkToSelect: true
    }
  }

  onChangeHandler = e => {
    const query = e.target.value
    this.setState({ query })
  }

  handleCheck = (productId, checked) => {
    this.setState(
      prevState => {
        const checkedProducts = prevState.checkedProducts
        checkedProducts[productId] = checked
        return { checkedProducts }
      }
    )
  }

  onDelete = () => {
    if (window.confirm('Are you sure want to delete the products')) {
      console.log(this.state.checkedProducts)
      const checkedArray = Object.keys(this.state.checkedProducts).filter(id => this.state.checkedProducts[id] === true)
      console.log(checkedArray)
      ProductApi.deleteProducts(checkedArray)
      window.location.reload()
    }
    else {
      window.location.reload()
    }
  }

  render() {
    const currentUser = UserStore.getCurrentUser()
    const products = this.props.products
    const query = this.state.query
    const filteredProducts = products.filter(product => {
      return product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    return (
      <Container className="mt-5">
        {this.props.bool ?
          (
            null
          )
          :
          (
            <Form className="animate__animated animate__jello">
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="text" placeholder="Search Product" onChange={this.onChangeHandler} />
                </Form.Group>
              </Form.Row>
            </Form>
          )
        }

        {/* -------- Customize field ------------- */}
        {
          !this.props.bool ?
          <Container>
          <Col>
            <Accordion>
              <Card>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click to Customise Product Fields</Tooltip>}>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="danger" eventKey="0">
                      Customise Fields
                    </Accordion.Toggle>
                  </Card.Header>
                </OverlayTrigger>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Product Name: <Form.Check
                      defaultChecked={true}
                      onChange={(evt) => {
                        const checked = evt.target.checked
                        this.setState(
                          prevState => {
                            console.log(prevState)
                            return { columns: { ...prevState.columns, productName: checked } }
                          }
                        )
                      }} />
                    Manufacturer: <Form.Check
                      defaultChecked={true}
                      onChange={(evt) => {
                        const checked = evt.target.checked
                        this.setState(
                          prevState => {
                            console.log(prevState)
                            return { columns: { ...prevState.columns, manufacturer: checked } }
                          }
                        )
                      }} />
                    Price: <Form.Check
                      defaultChecked={true}
                      onChange={(evt) => {
                        const checked = evt.target.checked
                        this.setState(
                          prevState => {
                            console.log(prevState)
                            return { columns: { ...prevState.columns, price: checked } }
                          }
                        )
                      }} />
                    Quantity: <Form.Check
                      defaultChecked={true}
                      onChange={(evt) => {
                        const checked = evt.target.checked
                        this.setState(
                          prevState => {
                            console.log(prevState)
                            return { columns: { ...prevState.columns, quantity: checked } }
                          }
                        )
                      }} />
                    Check To Select: <Form.Check
                      defaultChecked={true}
                      onChange={(evt) => {
                        const checked = evt.target.checked
                        this.setState(
                          prevState => {
                            console.log(prevState)
                            return { columns: { ...prevState.columns, checkToSelect: checked } }
                          }
                        )
                      }} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Container>
        : 
        null
        }
      
        {/* -------- Customize field ------------- */}

        <Row>
          <Row >
            {filteredProducts.map(product =>
              <div key={product.id}>
                <Products
                  productId={product.id}
                  productName={product.productName}
                  productDescription={product.productDescription}
                  manufacturer={product.manufacturer}
                  price={product.price}
                  quantity={product.quantity}
                  onCheck={this.handleCheck}
                  columns={this.state.columns}
                  bool={this.props.bool} />
              </div>
            )}
          </Row>
        </Row>
        <Container>

          {/* --------------- delete coloumn ---------------- */}
          <Row>
            <Col></Col>
            <Col >
              {
                currentUser ?
                  (
                    this.props.bool ?
                      (null)
                      :
                      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete Product</Tooltip>}>
                        <span className="d-inline-block">
                          <Button variant="outline-danger" onClick={this.onDelete}>
                            Delete
                          </Button>
                        </span>
                      </OverlayTrigger>
                  )
                  :
                  (null)
              }
            </Col>
            <Col></Col>
          </Row>
          {/* --------------- delete coloumn ---------------- */}
        </Container>

      </Container>
    )
  }
}