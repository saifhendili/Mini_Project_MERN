import React,{useEffect,Fragment,useState} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { getProducts } from '../../actions/produit';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';


function ListProduct({getProducts,produit:{loading,produits}}) {
    const [Search, setSearch] = useState('');

    useEffect(() => {
        getProducts();
      },[]);
    
  return (
    <Fragment>
    {loading || produits === null ? (
      <Spinner />
    ) : (    
     <Fragment>
        <div class="app-container">


<div class="app-main" id="main">
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 m-b-30">
            <div class="d-block d-sm-flex flex-nowrap align-items-center">
                <div class="page-title mb-2 mb-sm-0">
                    <h1>Produits</h1>
                </div>
                
                <div class="ml-auto d-flex align-items-center">
                <div className="main-form">
              <label htmlFor="main-search" />
              <input className="input-text input-text--border-radius input-text--style-1" type="text" onChange={(e)=>setSearch(e.target.value)} id="main-search" placeholder="Search" />
              <button className="btn btn--icon fas fa-search main-search-button" type="submit" /></div>
                        <div>
                          <Link to="addproduct">  <div class="btn btn-primary">
                                    Ajouter Produit
                            </div></Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
   
    <div class="row">
        <div class="col-12">
            <div class="card card-statistics clients-contant">
                <div class="card-header">
                    <div class="d-xxs-flex justify-content-between align-items-center">
                        <div class="card-heading">
                            <h4 class="card-title">Produits</h4>
                        </div>
                       
                    </div>
                </div>
                <div class="card-body py-0 table-responsive">
                    <table class="table clients-contant-table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Prix Unitaire</th>
                                <th scope="col">Quantité</th>
                                <th scope="col">visité</th>
                                <th scope="col">Modifié</th>
                                <th scope="col">Supprimé</th>
                            </tr>
                        </thead>
                        <tbody>
                       
              {produits.filter(el =>el.nom.toLowerCase().includes(Search.toLowerCase())).map((x)=>(<ProductItem  key={x._id} x={x} />))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>

</div>
</div>
</Fragment>

  )}
</Fragment>
)}
ListProduct.propTypes = {
    getProducts: PropTypes.func.isRequired,
    produit: PropTypes.object.isRequired,

  };
  
  const mapStateToProps = (state) => ({
    produit: state.produit,
  });
  
  export default connect(mapStateToProps, { getProducts })(ListProduct); 