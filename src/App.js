import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import SignInPage from './components/SignInPage'
import RegisterPage from './components/RegisterPage'
import ViewProductsPage from './components/ViewProductsPage'
import TopViewedProductsPage from './components/TopViewedProductsPage'
import { Suspense, lazy } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import UpdateUserPage from './components/UpdateUserPage';


const ProductsDetailsPage = lazy(() => import('./components/ProductsDetailsPage'))
const AddNewProductPage = lazy(() => import('./components/AddNewProductPage'))
const EditProductPage = lazy(() => import('./components/EditProductPage'))
const UserDetailsPage = lazy(() => import('./components/UserDetailsPage'))
const PageNotFound = lazy(()=> import('./includes/PageNotFound'))

function App() {
  return (
    <Router>      
          <div className="App">            
            <Suspense fallback={
              <h1>Please be patient while we're loading...
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </h1>}>
              <Switch>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/signIn" component={SignInPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/viewProducts" component={ViewProductsPage} />
                <Route path="/topViewedProducts" component={TopViewedProductsPage} />
                <Route path="/productDetails/:id" component={ProductsDetailsPage} />
                <Route path="/updateDetails/:id" component={UpdateUserPage} />
                <Route path="/addNewProduct" component={AddNewProductPage} />
                <Route path="/editProduct/:id" component={EditProductPage} />
                <Route path="/userDetails/:id" component={UserDetailsPage} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </Suspense>
          </div>
        </Router>
  );
}

export default App;
