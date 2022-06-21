// import React, { Fragment, useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListProduct from './Component/Product/ListProduct';
import ShowDetails from './Component/Product/ShowDetails';
import AddProduct from './Component/Product/AddProduct';
import Alert from './Component/Layout/Alert';
import EditProduct from './Component/Product/EditProduct';

function App() {

    return (
      <Provider store={store}> 
      <Alert/>
   <Router>
   <Routes>
   <Route path='/' element={<ListProduct/>} />
   <Route path='/myproduct' element={<ShowDetails/>} />
   <Route path='/addproduct' element={<AddProduct/>} />
   <Route path='/editproduct' element={<EditProduct/>} />

   
   </Routes>
    
   </Router>
  </Provider>
  );
}

export default App;
