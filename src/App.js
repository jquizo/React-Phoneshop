import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
//Components 
import { Navbar, ProductList, CartPage, Page404, ProductDetails, Modal, Footer } from './Components/index';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/cart" component={CartPage}></Route>
        <Route path="/productdetails" component={ProductDetails}></Route>
        <Route component={Page404}></Route>
      </Switch>
      <Modal />
      </div> {/* !.content-wrapper */}
      <Footer />
    </div>  
  );
}

// Start from 5:52

export default App;
