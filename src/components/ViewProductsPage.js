import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../includes/header'
import Container from 'react-bootstrap/Container'
import CardsView from '../includes/cardsView'
import ProductStore from '../stores/ProductStore'
import InitializeActions from '../actions/InitializeProductActions'
import Navbar from 'react-bootstrap/Navbar'


export default class AllProductsPage extends React.Component {
    constructor(props) {
      super(props)
      this._onChange = this._onChange.bind(this)
      this.state = {
        products: ProductStore.getAllProducts()
      }

    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange)
        InitializeActions.initProducts()
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange)
    }

    _onChange() {
        this.setState({ products: ProductStore.getAllProducts() })
    }

    render() {
        return (
            <div>
                {this.props.bool ? null  : <Header/>}
                <CardsView products={this.state.products} bool={this.props.bool} />            
            </div>
        );
    }
}
