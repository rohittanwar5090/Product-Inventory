import React from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import UserStore from '../stores/UserStore'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  // clickHandler = () => {
  //  if( window.confirm(`Are you sure you want to view ${this.props.productName} ?`))
  // }
  clickHandlerWithoutUser = () => {
    alert('Please Register First')
  }
  handleChange(evt) {
    this.props.onCheck(this.props.productId, evt.target.checked)
  }
  render() {
    const currentUser = UserStore.getCurrentUser()
    console.log(this.props);
    return (
      <>
        <div>
          <Row>
            <Col lg='3' className="animate__animated animate__slideInRight" >
              <Card style={{ width: '22rem ' , marginLeft: '2rem', marginBottom: '2rem' , marginTop:'2rem'}}>
                <Card.Img style={{ height: '14rem ' }} variant="top" src={`https://robohash.org/${this.props.productId}/478/185`} />
                <Card.Body>
                  {
                    this.props.columns.productName ?
                      <Card.Title>{this.props.productName}</Card.Title>
                      :
                      null
                  }
                  {
                    this.props.columns.manufacturer ?
                      <Card.Text>{this.props.manufacturer}</Card.Text>
                      :
                      null
                  }
                  {
                    this.props.columns.price ?
                      <Card.Text>Rs.{this.props.price}</Card.Text>
                      :
                      null
                  }
                  {
                    this.props.columns.quantity ?
                      <Card.Text>Qty: {this.props.quantity}</Card.Text>
                      :
                      null
                  }
                  {
                    this.props.columns.productDescription ?
                      <Card.Text>{this.props.productDescription}</Card.Text>
                      :
                      null
                  }

                  <Button variant="light"> {currentUser ? <Link to={`/productDetails/${this.props.productId}`} onClick={this.clickHandler}>View More</Link>
                    : <Link to={`/register`} onClick={this.clickHandlerWithoutUser}> {this.props.productName}</Link>
                  }</Button>
                  {
                    currentUser ?
                      (this.props.columns.checkToSelect ?
                        this.props.bool
                          ?
                          (
                            null
                          )
                          :
                          (
                            (
                              <div>
                                <td><Form.Check aria-label="option 1" onChange={this.handleChange} /><span>delete</span></td>
                              </div>
                            )
                          )
                        : null
                      )
                      : null
                  }
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}


export default withRouter(Product) 